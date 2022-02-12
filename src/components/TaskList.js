import React from 'react';
import Task from './task';
const TaskList =props => (
  return (
  <div className="task-list">
  <div className="task-list-title">
    <strong>{props.status}</strong>
  </div>
{props.tasks.map(task=>(
  <Task key={task.id} taks={task} />
))}
</div>
);
}

export default TaskList;
