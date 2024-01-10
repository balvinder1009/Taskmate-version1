import React from 'react'
import "./card.css"

export const Card = ({task, handleDelete}) => {
  return (
    <li className={task.completed ? "complete" : "incomplete"}>
        <span>{task.id} - {task.name}</span>
        <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  )
}
