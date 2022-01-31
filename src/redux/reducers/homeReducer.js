import {SET_HOME } from "../actions";
import { initialState } from "../store";

const homeReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case SET_HOME:
      return { ...state, home: action.payload };
    default:
      return state;
  }
};

export default homeReducer