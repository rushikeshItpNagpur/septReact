import React, { useState } from 'react'
import Inpcol from './Inpcol'
import Taskcol from './Taskcol'

export default function Todolist() {

  let [allTodos,setAllTodos]=useState([])
     console.log(allTodos)
  return (
    <div style={{width:"700px",height:"700px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",margin:"auto"}}>
       
       <Inpcol allTodos={allTodos} setAllTodos={setAllTodos}    />
      < Taskcol data={allTodos}/>
      
    </div>
  )
}
