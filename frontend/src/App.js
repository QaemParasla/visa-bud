import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./view/Home";
import { Blog } from "./view/Blog";
import { Contacts } from "./view/Contacts";
import { NotFound404 } from "./view/NotFound404";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contacts" component={Contacts} />
        <Route path="/" component={NotFound404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
