import {TOGGLE_FAVOURITE, GET_FLIGHTS, REQUEST_FLIGHTS, SET_FLIGHTS_DATE, SHOW_LOADER, HIDE_LOADER} from "../types";
import {toggleFavouriteFlight} from "../../functions/toggleFavouriteFlight";

const initialState = {
  flights: {},
  isLoading: null,
  flightsDate: '',
  photoGallery: [
    '../img/pic1.png',
    '../img/pic1.png',
    '../img/pic2.png',
    '../img/pic3.png'
  ],
  favouriteFlights: []
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FLIGHTS:
      return {
        ...state,
        flightsDate: action.payload
      }
    case GET_FLIGHTS:
      return {
        ...state,
        flights: action.payload
      }
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        favouriteFlights: action.payload
      }
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      }
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}