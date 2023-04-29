import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const AdTask = () => {

   const [description , setDescription] = useState("");
   const dispatch = useDispatch();
   
   const handleClick= e =>{
    e.preventDefault();
    dispatch(addTask(description));
    setDescription("");
   }

  return (
    <div>
        <input
            type='text'
            placeholder='Add new task' 
            value={description} 
            onChange={e => setDescription(e.target.value)} />
        <button onClick={handleClick}>ADD</button>


    </div>
  )
}

export default AdTask