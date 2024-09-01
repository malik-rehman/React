"use client"


import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
   setMaintask([...Maintask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(Maintask);
    
  }
  const deleteHandler= ( (i) => {
    let copytask=[...Maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  })
  let renderTask=<h1 className='text-2xl p-6'>No Task Available</h1>
  if (Maintask.length>0) {
    renderTask=Maintask.map((t,i)=>{
      return <li className='list-none'>
       <div className='flex justify-evenly p-5'>
         <h5 className='text-2xl font-semibold'>{t.title}</h5>
         <h6 className='text-xl font-semibold'>{t.desc}</h6>
       <button
       onClick={()=>{
        deleteHandler(i)
       }}
       className='bg-red-400 text-white font-bold p-3 rounded'>Delete</button>
       </div>
      </li>
     });
     
  }
  
  return (
    <>
      <h1 className='bg-green-600 text-center text-white text-2xl py-8'>MAlik's ToDo App</h1>
      <form onSubmit={submitHandler} className='px-4 py-4'>
      <input type="text" placeholder='Enter your task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
       className='p-3 border-2 border-black w-[22rem]'/>
      <input type="text" placeholder='Enter Description' 
     value={desc}
     onChange={(e)=>{
      setdesc(e.target.value)
     }}
      className='p-3 border-2 border-black w-[22rem] ml-4'/>
      <button className='bg-slate-700 text-lg text-white p-3 ml-5 rounded-md'>Add Task</button>
      </form>
      <div className='bg-slate-200 p-4'>
      {renderTask}
      </div>
    </>
    
    
  )
}

export default page