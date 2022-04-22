import React from 'react';
import { useState } from 'react';

const AddTask = ({ addNewTask }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const submitTask = (e) => {
    if (text.length <= 0) {
      alert('add a task');
    } else {
      const newTask = {
        // id: Math.floor(Math.random() * 500),
        text,
        day: date,
        reminder,
      };

      // addNewTask(e, newTask);
      addNewTask(newTask);
      setText('');
      setDate('');
      setReminder(false);
    }
  };

  return (
    <form className='form' onSubmit={submitTask}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text'
          className='form-ipnut'
          placeholder='your task here'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          className='form-ipnut'
          placeholder='Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control form-reminder'>
        <label>Remind</label>
        <input
          type='checkbox'
          className='form-ipnut'
          onChange={() => setReminder(!reminder)}
          checked={reminder}
        />
      </div>
      <div className='form-control'>
        <input type='submit' value='Add Task' />
      </div>
    </form>
  );
};

export default AddTask;
