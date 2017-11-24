import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import './App.css';

class App extends Component {

  state = {
    list: [
      { todo: "Clean the dishes", finished: false },
      { todo: "Do my Laundry", finished: true },
      { todo: "Finish all my homework", finished: false },
      { todo: "Walk the dog", finished: false },
      { todo: "Finish this project", finished: false },
    ]
  }

  addNewTodoHandler = ( event ) => {
    if (event.key === 'Enter' ) {
      let newInput = event.target.value;
      const list = [ ...this.state.list ];
      list.push( { todo: newInput, finished: false } );
      this.setState( { list: list } );
      event.target.value = '';
    }
  }

  // deleteListItemHandler = ( index ) => {
  //   const list = [ ...this.state.list ];
  //   list.splice( index, 1 );
  //   this.setState( { list: list } );
  // }

  finishItemHandler = ( index ) => {
    const list = [ ...this.state.list ];
    list[ index ].finished = !this.state.list[ index ].finished;
    this.setState( { list: list } );
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <input onKeyPress={ ( event ) => this.addNewTodoHandler( event ) } type="text" placeholder="Add" />
        <TodoItems finClick={ this.finishItemHandler } todos={ this.state.list } />
      </div>
    );
  }
}

export default App;
