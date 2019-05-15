import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TodoCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const TodoCard = styled.div`
    border: solid 1px;
    width: 600px;
    text-align: left;
    padding-left: 10px;
`

const Todo = ({ text, id, completed, onClick }) => (
    <TodoCardWrapper>
        <TodoCard 
        onClick={onClick} 
        style={{
            borderTopWidth: id !== 0 ? 0  : undefined, 
            textDecoration: completed ? 'line-through' : 'none' 
        }}>
            {text}
        </TodoCard>
    </TodoCardWrapper>
)

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo