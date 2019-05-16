import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'

const Title = styled.div`
  font-size: 50px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>yotaiyo`s To-Do App</Title>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
