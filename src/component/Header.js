import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onShowTaskForm, showAddTask }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h2>{title}</h2>
      {location.pathname === '/' && (
        <Button
          onClick={onShowTaskForm}
          text={showAddTask ? 'CLose' : 'Add'}
          color={showAddTask ? 'red' : 'green'}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;
