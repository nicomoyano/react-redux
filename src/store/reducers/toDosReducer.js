import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

let initialState = [];

export const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((toDo) => {
        if (toDo.id === action.payload.id) {
          return { ...toDo, completed: !toDo.completed };
        } else {
          return toDo;
        }
      });
    default:
      return state;
  }
};
