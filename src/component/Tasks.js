import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDeleteTask, addReminder }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            addReminder={addReminder}
          />
        );
      })}
    </>
  );
};

export default Tasks;
