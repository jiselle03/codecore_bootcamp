import React from "react";
import "./css/QuestionShowPage.css"
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

// A React component is a function that returns a react element.
// PascalCase is the naming convention for React components.
// Components whose names do not begin with a capital letter will be interpreted as a plain HTML tag.

const QuestionShowPage = () => {
    return (
        <div className="Page">
          <QuestionDetails
            title="What is your favourite color?"
            body="Red, Green, Magenta, etc."
            author={{ full_name: "Michael Owen" }}
            view_count={100}
            created_at={new Date()}
          />
          <AnswerList answers={oneQuestionData.answers} />
        </div>
      );
};

// In JSX, self-closing tags must be closed. For example, you must write <img /> instead of <img>.

export default QuestionShowPage;