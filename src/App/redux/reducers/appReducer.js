import {LOG_IN, LOG_OUT} from "../types";

const initialState = {
  login: !!localStorage.getItem('svo_jfk_login')
}

export const appReducer = (state = initialState, action) => {
  switch (action.payload) {
    case LOG_IN:
      return {
        ...state,
        login: true,
      }
    case LOG_OUT:
      return {
        ...state,
        login: null,
      }
    default:
      return state
  }
}