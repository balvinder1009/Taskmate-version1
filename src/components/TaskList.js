import React from 'react'
import "./tasklist.css"
import { Card } from './Card'

export const TaskList = ({tasks, setTasks, show, setShow, handleDelete}) => {
  return (
    <ul>
        <button onClick={() => setShow(!show)} className='toggle'>{show ? "Hide" : "Show"}</button>
        {show && tasks.map((task) => {
            return(
               <Card task={task}  handleDelete={handleDelete}/>
            )
        })}
    </ul>
  )
}
