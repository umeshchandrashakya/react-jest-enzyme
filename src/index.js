import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
// import {Provider} from 'react-redux';
// import {createStore}from 'redux';
// import reducer from './reducers'
import Root from "Root";
import { BrowserRouter, Route } from "react-router-dom";

ReactDom.render(
  //   <Provider store={createStore(reducer, {})}>
  //     <App />
  //   </Provider>,
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
