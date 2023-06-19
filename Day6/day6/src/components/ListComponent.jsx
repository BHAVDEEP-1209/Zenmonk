import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from "./TaskCard"

const ListComponent = () => {
    const tasksList = useSelector(state=>state.assignedTasks.tasks);
  return (
    <div className='list_tasks_div'>
{
    tasksList.map((ele,ind)=>{
        return <TaskCard state={ele} key={ind}/>
        
    })
}

    </div>
  )
}

export default ListComponent