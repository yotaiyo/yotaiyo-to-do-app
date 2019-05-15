import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const AddTodoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid 1px;
`

const TextInput = styled.input`
    border: solid 0px;
`

const AddButton = styled.div`
    font-size: 10px;
    border: solid 1px;
    margin-left: 1px;
    margin: 3px;
`

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <Wrapper>
            <AddTodoWrapper>
                <TextInput ref={(node) => {
                    input = node
                }} />
                <AddButton onClick={() => {
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    Add Todo
                </AddButton>
            </AddTodoWrapper>
        </Wrapper>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo