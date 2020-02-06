import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container segment">
        <header>
          <NavBar />
        </header>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route exact path="/questions/:id" component={QuestionShowPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
