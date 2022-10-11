import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ toDos, onClickToDo }) => {
  return (
    <div>
      <h1>Your Tasks</h1>
      <div>
        {toDos.map((toDo, index) => (
          <ToDo
            key={index}
            {...toDo} //id,text,completed
            onClick={() => onClickToDo(toDo.id)}
          />
        ))}
      </div>
    </div>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onClickToDo: PropTypes.func.isRequired,
};

export default ToDoList;
