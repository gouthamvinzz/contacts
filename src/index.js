import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import ContactView from "./Contact/Contact";

import Store from "./Store/Store";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ContactView} />
      </BrowserRouter>
    </div>
  );
};

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
