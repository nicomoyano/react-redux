import PropTypes from 'prop-types';

const ToDo = ({ text, onClick, completed, id }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        textDecorationColor: completed ? 'green' : 'none',
        color: completed ? 'green' : 'black',
      }}
    >
      {id} - {text}
    </li>
  );
};

ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default ToDo;
