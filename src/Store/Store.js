import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  darkMode: true,
  mails: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAILS":
      return { ...state, mails: [...state.mails, ...action.payload] };
    case "LOGIN":
      console.log(action);
      return { ...state, isLoggedIn: action.payload };
    case "THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
