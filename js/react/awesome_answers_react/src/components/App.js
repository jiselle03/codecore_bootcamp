import React from "react";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { Clock } from "./Clock";

const App = () => {
  return (
    <div className="ui container">
      <Clock />
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
};

export default App;
