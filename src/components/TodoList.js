import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TodoCard from './TodoCard'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

const TodoCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`

const TodoList = ({ todos, onTodoClick }) => {
    return(
    <Wrapper>
        <TodoCardWrapper style={{ borderTop: todos.length !== 0 ? 'solid 1px' : undefined }}>
            {todos.map((todo) =>
                <TodoCard 
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </TodoCardWrapper>
    </Wrapper>
)}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        onTodoClick: PropTypes.func.isRequired
    }).isRequired).isRequired
}

export default TodoList
