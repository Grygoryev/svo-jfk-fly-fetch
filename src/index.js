import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';

// for making sagas work, link:https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from './App/App';
import {rootReducer} from "./App/redux/reducers/rootReducer";
import {sagaWatcher} from "./App/sagas";

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  app,
  document.getElementById('root')
);

