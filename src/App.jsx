import './App.css';
import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default App;
