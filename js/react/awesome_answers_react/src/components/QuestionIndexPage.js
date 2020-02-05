import React, { Component } from "react";

import NewQuestionForm from "./NewQuestionForm";
import questionData from "../questionData";

export class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // This copies the questions array into a new array that is stored
      // in the state of this component, as the state's questions field
      // questions: questions.map(question => question)
      questions: [...questionData]
    };
  };

  deleteQuestion(id) {
    // To update state, always use 'setState(...)' method.
    // You can use setState by passing an object to its first argument.
    // When the time comes, the object will be merged with the current state.
    // This will change whatever properties are within the current state.
    // this.setState({
    //   questions: this.state.questions.filter(q => q.id !== id)
    // });

    // You can also use setState by giving a callback as a first argument
    // that receives the current state and props are arguments. It must
    // return an object that will be merged with the state.
    this.setState((state, props) => {
      return {
        questions: state.questions.filter(q => q.id !== id)
      }
    });
  };

  createQuestion = params => {
    // Update the list of questions within our state by adding
    // a new question to that list
    this.setState(state => {
      return {
        questions: [
          {
            ...params,
            id: Math.max(...state.questions.map(q => q.id)) + 1
          },
          ...state.questions
        ]
      };
    });
  };

  render() {
    return (
      <main>
        <NewQuestionForm 
          onCreateQuestion={this.createQuestion}
        />
        <h2 className="ui horizontal divider header">Questions</h2>
        <ul
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.questions.map(question => (
            <li className="item" key={question.id}>
              <a className="ui header" href="">{question.title}</a> 
              <button 
                className="ui small right floated red button"
                onClick={() => this.deleteQuestion(question.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    );
  };
};
