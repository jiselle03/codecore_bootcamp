import React, { Component } from "react";
import "./css/QuestionShowPage.css"
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

// A React component is a function that returns a react element.
// PascalCase is the naming convention for React components.
// Components whose names do not begin with a capital letter will be interpreted as a plain HTML tag.

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based component, you must
    // call the 'Component' class constructor with 'super' pass it the 'props'.
    super(props);
    this.state = {
      question: oneQuestionData
    };
  };

  deleteQuestion(id) {
    this.setState({
      question: null
    });
  };

  render() {
    if(!this.state.question) {
      return (
        <div className="Page">
          <h3 style={{color: "white", backgroundColor: "red"}}>Question does not exist.</h3>
        </div>
      );
    };
    return (
      <div className="Page">
        <QuestionDetails {...this.state.question} />
        <button onClick={() => this.deleteQuestion()}>Delete</button>
        <AnswerList answers={this.state.question.answers} />
      </div>
    );
  };
};

// In JSX, self-closing tags must be closed. For example, you must write <img /> instead of <img>.

export default QuestionShowPage;