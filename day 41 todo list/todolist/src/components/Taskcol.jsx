import React from 'react'
import Taskdata from './Taskdata'

export default function Taskcol({data}) {
  return (
    <div style={{
        width:'80%',
        height:"auto",
        margin:"auto"
    }}>

           {   data.map((el,i,arr)=>{
                
                return  <Taskdata id={el.id} srno={i+1} task={el.task} priority={el.priority} status={el.status} />
              })   
            }
    </div>
  )
}
