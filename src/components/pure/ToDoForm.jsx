import { React, useRef } from 'react';
import PropTypes from 'prop-types';

const ToDoForm = ({ onSubmit }) => {
  const text = useRef('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(text.current.value);
          text.current.value = '';
        }}
      >
        <input type="text" ref={text} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
