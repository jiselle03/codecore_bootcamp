import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Question } from "../../api/question";
import { Spinner } from "../Spinner";

export const QuestionIndexPage = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
      // This copies the questions array into a new array that is stored
      // in the state of this component, as the state's questions field
      // questions: questions.map(question => question)
  //     questions: [],
  //     isLoading: true
  //   };
  // };

  // const [questions, setQuestions] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [questionIndex, setQuestionIndex] = useState({
    questions: [],
    isLoading: true
  });

  useEffect(() => {
    Question.all().then(questions => { 
      // setQuestions(questions);
      // setIsLoading(false);
      setQuestionIndex({questions, isLoading: false})
    });
  }, []);

  const deleteQuestion = id => {
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
    // this.setState((state, props) => {
    //   return {
    //     questions: this.state.questions.filter(q => q.id !== id)
    //   }
    // });
    const newQuestionsList = questionIndex.questions.filter(q => q.id !== id);
    // setQuestions(newQuestionsList);
    setQuestionIndex({ ...questionIndex, questions: newQuestionsList });
  };

  // componentDidMount() {
  //   Question.all().then(questions => this.setState({ questions: questions, isLoading: false }));
  // };

  // render() {
    if(questionIndex.isLoading) {
      return(
        <Spinner message="Loading questions" />
      );
    };

    return (
      <main>
        <h2 className="ui horizontal divider header">Questions</h2>
        <ul
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {questionIndex.questions.map(question => (
            <li className="item" key={question.id}>
              <Link to={`/questions/${question.id}`} className="ui link" href="">
                {question.title}
              </Link>
              <button 
                className="ui small right floated red button"
                onClick={() => deleteQuestion(question.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    );
  // };
};
