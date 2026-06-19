import React from 'react'

export default function Taskdata({id,srno,task,priority,status}) {
  return (
    <div style={{
        width:"80%",
        margin:"auto",
        border:"1px solid red",
        display:'flex',
        justifyContent:"space-evenly",
        alignItems:"center"
    }}>
           
       <h3>{srno}</h3>
       <h2>{task}</h2>
       <h2>{priority}</h2>
       <button>{status?"compleated" : "incomplete"}</button>

    </div>
  )
}
