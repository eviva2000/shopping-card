import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">shopping</Route>
          <Route path="/cart">cart</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
