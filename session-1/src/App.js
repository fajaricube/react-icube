import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "./router";
import { Footer } from "./containers/templates";
import Header from "./containers/templates/Header";

function App() {
  return (
    <BrowserRouter>
      <Header transparent />
      {Router.map((route, index) => {
        return <Route key={index} exact path={route.path} component={route.component} />;
      })}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
