 import React, { useEffect, useState } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask } from '../api';
import TaskForm from './TaskForm';
import CommentSection from './CommentSection';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async (taskData) => {
    await addTask(taskData);
    loadTasks();
  };

  const handleEdit = async (id, updatedData) => {
    await updateTask(id, updatedData);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <TaskForm onSubmit={handleAdd} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <b>{task.title}</b> - {task.description}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id, prompt("New title:", task.title))}>Edit</button>
            <CommentSection taskId={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;