import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

import App from "./app";

const store = createStore(reducers, window.__PRELOADED_STATE__);

window.__appStore = store;

if (window.__PRELOADED_STATE__) delete window.__PRELOADED_STATE__;

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`),
);
