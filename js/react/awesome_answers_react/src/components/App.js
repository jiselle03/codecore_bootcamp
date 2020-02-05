import React from "react";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

const App = () => {
  return (
    <div class="ui container">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
};

export default App;
