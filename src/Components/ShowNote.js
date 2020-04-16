import React, {Component} from 'react';

class ShowNote extends Component{
  render(){
    const {todolist} = this.props;
    const {completeNote} = this.props;
    return(
      <div className="todo-div">
        {todolist.map((todo, index)=>(
        <h5 key={index}>
            <span className="todo-item">{todo}</span>
            <button className="done-button" onClick={()=>completeNote(index)}>Done</button>
        </h5>
        ))}
      </div>
    )
  }
}

export default ShowNote;