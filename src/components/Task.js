import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask, deleteTask } from '../redux/actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Enter your edit", task.description);
    if (newDescription) {
      dispatch(editTask({ ...task, description: newDescription }));
    }
  };
  

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
        <input type="checkbox" onClick={handleToggle} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
