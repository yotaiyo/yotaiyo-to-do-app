import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Todo = styled.div`
    border-left: solid 1px;
    border-right: solid 1px;
    border-bottom: solid 1px;
    width: 600px;
    text-align: left;
    padding-left: 10px;
`

const TodoCard = ({ text, completed, onClick }) => {
    return(
    <Wrapper>
        <Todo
            onClick={onClick} 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
                {text}
        </Todo>
    </Wrapper>
)}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
}

export default TodoCard