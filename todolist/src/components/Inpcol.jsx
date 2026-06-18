import React, { useState } from 'react'

export default function Inpcol({allTodos,setAllTodos}) {
    let [todoData,setTodoData]=useState("")
    let [priority,setPriority]=useState("")
 

    function handleChange(event){
       
        setTodoData(event.target.value)
        
    }
    function handlePrio(event){
        
      setPriority(event.target.value)
    }


    function handleClick(){
          
        let todo={
             id:Date.now(),
             task:todoData,
             priority:priority,
             status:false

        }

        setAllTodos([...allTodos,todo])

    }
 
 
    return (
      
    <div  
      style={{ width:"90%",height:"60px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}
    >
       <input value={todoData}  type="text" name="" onChange={handleChange} placeholder='Enter the todo' />
    <select onChange={handlePrio} name="" id="">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
      {console.log(todoData)}
    <button onClick={handleClick}>add Todo</button>

    </div>
  )
}
