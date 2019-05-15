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

const Todo = ({ text, id }) => (
    <TodoCardWrapper>
        <TodoCard style={ id !== 0 ? { borderTopWidth: 0 } : undefined }>
            {text}
        </TodoCard>
    </TodoCardWrapper>
)

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo