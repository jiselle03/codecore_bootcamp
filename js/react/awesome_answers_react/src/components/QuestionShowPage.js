import React, { Component } from "react";
import "./css/QuestionShowPage.css"
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";
import { Spinner } from "./Spinner";

// A React component is a function that returns a react element.
// PascalCase is the naming convention for React components.
// Components whose names do not begin with a capital letter will be interpreted as a plain HTML tag.

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based component, you must
    // call the 'Component' class constructor with 'super' pass it the 'props'.
    super(props);
    this.state = {
      question: null,
      isLoading: true
    };
  };

  deleteQuestion(id) {
    Question.destroy(this.state.question.id).then(data => {
      this.props.history.push("/questions");
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

  componentDidMount() {
    // All components that are rendered by a <Route> component (like QuestionShowPage) will be given
    // props by that route component. One of these props is called "match", which contains information
    // related to the pattern matched patch defined in App.js.
    // <Route path="/questions/:id/:test/:something" component="{QuestionShowPage}" />
    // match: {
      // params: {
        // id: <whatever-id>,
        // test: <whatever-test>,
        // something: <whatever-something> 
      // } 
    // }
    Question.one(this.props.match.params.id).then(question => {
      this.setState({ question, isLoading: false });
    });
  };

  render() {
    if(!this.state.question) {
      return (
        <Spinner message="Question does not exist!" />
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