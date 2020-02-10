import React, { useState, useEffect } from "react";
import "./css/QuestionShowPage.css"
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";
import { Spinner } from "./Spinner";

export const QuestionShowContext = React.createContext();

// A React component is a function that returns a react element.
// PascalCase is the naming convention for React components.
// Components whose names do not begin with a capital letter will be interpreted as a plain HTML tag.

export const QuestionShowPage = props => {
  const [questionShow, setQuestionShow] = useState({
    question: null,
    isLoading: true  
  });

  const currentQuestionId = props.match.params.id;

  // constructor(props) {
    // When using a constructor in a class-based component, you must
    // call the 'Component' class constructor with 'super' pass it the 'props'.
    // super(props);
    // this.state = {
    //   question: null,
    //   isLoading: true
    // };
  // };

  const deleteQuestion = id => {
    Question.destroy(questionShow.question.id).then(data => {
      props.history.push("/questions");
    });
  };

  const deleteAnswer = id => {
    // this.setState({
    //   question: {
    //     ...this.state.question,
    //     answers: this.state.question.answers.filter(a => a.id !== id)
    //   }
    // });
    const newAnswers = questionShow.question.answers.filter(a => a.id !== id); 
    setQuestionShow({
      ...questionShow,
      question: { ...questionShow.question, answers: newAnswers }
    });
  };

  // componentDidMount() {
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
  //   Question.one(this.props.match.params.id).then(question => {
  //     this.setState({ question, isLoading: false });
  //   });
  // };

  useEffect(() => {
    Question.one(currentQuestionId).then(question => {
      setQuestionShow({ question, isLoading: false });
    });
  }, [currentQuestionId]);

  // render() {
    if(!questionShow.question) {
      return (
        <Spinner message="Question does not exist!" />
      );
    };
    
    return (
      <div className="Page">
        <QuestionDetails {...questionShow.question} />
        <button 
          className="ui small right floated red button"
          onClick={() => deleteQuestion()}>Delete</button>
        <QuestionShowContext.Provider value={deleteAnswer} />
        <AnswerList 
          answers={questionShow.question.answers} 
          onAnswerDeleteClick={id => deleteAnswer(id)}
        />
      </div>
    );
  // };
};

// In JSX, self-closing tags must be closed. For example, you must write <img /> instead of <img>.
