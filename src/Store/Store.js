import { createStore } from "redux";

const initialState = {
  isLoggedIn: "",
  darkMode: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
    case "THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
