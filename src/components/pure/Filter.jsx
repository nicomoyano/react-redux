import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ children, active, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  } else {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </button>
    );
  }
};

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
