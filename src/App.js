import React, { Component } from 'react';
import Form from './Form';
import MultipleForm from './MultipleForm';
import ShoppingList from './ShoppingList';
import BoxList from './BoxList';
import TodoList from './TodoList';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Form />
        <MultipleForm />
        <ShoppingList />
        <BoxList />
        <TodoList />
      </div>
    );
  }
}

export default App;
