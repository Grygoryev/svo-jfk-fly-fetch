import {
  LOG_IN,
  LOG_OUT,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_FLIGHTS,
  REQUEST_FLIGHTS,
  TOGGLE_FAVOURITE
} from "./types";

export function loginUser() {
  localStorage.setItem('svo_jfk_login', '1');
  location.reload()
  return {
    type: LOG_IN,
    payload: true
  }
}

export function logoutUser() {
  localStorage.removeItem('svo_jfk_login');
  location.reload()
  return {
    type: LOG_OUT,
    payload: false
  }
}

export function toggleFavourite(payload) {
  console.log(payload)
  return {
    type: TOGGLE_FAVOURITE,
    payload: payload
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function fetchFlights(date) {
  return {
    type: REQUEST_FLIGHTS,
    payload: date
  }
}

export function getFlights({payload}) {
  return {
    type: GET_FLIGHTS,
    payload: payload
  }
}