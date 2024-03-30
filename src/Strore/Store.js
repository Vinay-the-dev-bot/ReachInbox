import { createStore } from "redux";

const initialState = {
  isLoggedIn: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
