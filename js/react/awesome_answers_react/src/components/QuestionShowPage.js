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

  deleteAnswer(id) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    });
  };

  render() {
    if(!this.state.question) {
      return (
        <div className="Page">
          <h3 className="ui red header">Question doesn't exist</h3>
        </div>
      );
    };
    return (
      <div className="Page">
        <QuestionDetails {...this.state.question} />
        <button 
          className="ui small right floated red button"
          onClick={() => this.deleteQuestion()}>Delete</button>
        <AnswerList 
          answers={this.state.question.answers} 
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
        />
      </div>
    );
  };
};

// In JSX, self-closing tags must be closed. For example, you must write <img /> instead of <img>.

export default QuestionShowPage;