// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

const TodoList = props => {
    return (
    <div>
        {props.list.map( (item) => {
             return (
                 <div className="Todos">
                     <p onClick={() => props.clickComplete(item.id)} style={item.completed ? {textDecoration:'line-through'} : null}>{item.task}</p>
                 </div>
             )
        })}
    </div>
    )
}

//item.id = the id of the specific item that was mapped
//item.completed will be toggled and will run a ternary

export default TodoList