import {takeEvery, put, call, select} from 'redux-saga/effects'
import {GET_FLIGHTS, REQUEST_FLIGHTS} from "./redux/types";
import {hideLoader, getFlights, showLoader} from "./redux/actions";

const flightsDate = (state) => state.flights.flightsDate

export function* sagaWatcher() {
  yield takeEvery(REQUEST_FLIGHTS, downloadFlights)
}

function* downloadFlights() {
  try {
    yield put(showLoader())
    const date = yield select(flightsDate)
    const payload = yield call(() => fetchPosts(date))
    yield put(getFlights({payload}))
    yield put(hideLoader())
  } catch (e) {
    alert('Warning' + e)
  }
}

async function fetchPosts(date) {
  try {

    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/ru-RU/MOSC-sky/NYCA-sky/${date}`

    const response = await fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3323b30384mshe107664a1bb5c0cp18db76jsn1f94c6f2517b",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
    return await response.json()

  } catch (err) {
    console.error(err);
  }
}