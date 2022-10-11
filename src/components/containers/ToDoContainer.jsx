import { connect } from 'react-redux';
import { toggleToDo } from '../../store/actions/actions';
import ToDoList from '../pure/ToDoList';

const filterToDos = (toDos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return toDos;
    case 'SHOW_ACTIVE':
      return toDos.filter((toDo) => toDo.completed === false);
    case 'SHOW_COMPLETED':
      return toDos.filter((toDo) => toDo.completed === true);
    default:
      return toDos;
  }
};

const mapStateToProps = (state) => {
  return {
    toDos: filterToDos(state.toDosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToDo: (id) => {
      dispatch(toggleToDo(id));
    },
  };
};

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoContainer;
