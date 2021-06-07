import { CHANGE_TEXT, CHANGE_BG } from './actionsType';
// import data from '../redux/actionData';

// console.log('data', data());

const initialState = {
  changeText: 'Welcome Roy Home',
  changeBG: '#eee',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        changeText: action.text,
      };
    case CHANGE_BG:
      return {
        ...state,
        changeBG: action.background,
      };
    default:
      return state;
  }
};
