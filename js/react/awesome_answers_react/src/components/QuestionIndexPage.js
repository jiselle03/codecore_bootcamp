import React, { Component } from "react";

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
  render() {
    return (
      <main>
        <h2>Questions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.questions.map(question => (
            <li key={question.id} style={{ padding: "0.2em" }}>
              <a href="">{question.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  };
};
