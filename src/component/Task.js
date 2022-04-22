import React from 'react';

const Task = ({ task, onDeleteTask, addReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => addReminder(task.id)}
    >
      <div>
        <h4>{task.text}</h4>
        <p style={{ fontSize: '12px', marginTop: '5px', color: '#4444' }}>
          {task.day}
        </p>
      </div>

      <span onClick={() => onDeleteTask(task.id)}>x</span>
    </div>
  );
};

export default Task;
