import React, {Component} from 'react';
import ShowNote from './ShowNote';

class TodoList extends Component{

  state = {
    Note: '',
    todolist: ["JS", "React"],
  }

  updateNote = (e) =>{
    const newNote = e.target.value;
    this.setState({
      Note: newNote 
    })
  }

  addNote = () =>{
    const newTodolist = [...this.state.todolist];
    newTodolist.push(this.state.Note);
    this.setState({
      todolist: newTodolist,
      Note: '',
    })
  }

  deleteNote = (index) =>{
    // make copy from todolist to not lose the item in array
    const newTodolist = [...this.state.todolist];
    newTodolist.splice(index, 1);
    this.setState({
      todolist: newTodolist
    })
  }

  render(){
    return(
      <div className="todo-list">
        <div className="todo">
          <input type="text" placeholder="Note..." value={this.state.Note} onChange={this.updateNote}/>
          <button className="add-button" onClick={this.addNote}>Add</button>
          {this.state.todolist.length > 0 ? (
            <ShowNote todolist={this.state.todolist} completeNote={this.deleteNote} note = {this.state.Note} />
          ):<h1>"No Items"</h1>}
        </div>
      </div>
    )
  }
}

export default TodoList;