import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionNewPage } from "./QuestionNewPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { SignInPage } from "./SignInPage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  };

  // componentDidMount() {
    // This gives us back a cookie that represents us being logged in. Now, when we make POST
    // requests to the server to make a Question, we will be authenticated. This is a hacky method
    // until we learn about Authentication in React.
  //   Session.create({
  //     email: "js@winterfell.gov",
  //     password: "supersecret"
  //   }).then(user => {
  //     this.setState({ currentUser: user });
  //   });
  // };

  render() {
    return (
      <BrowserRouter>
        <div className="ui container segment">
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <Route exact path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route path="/sign_in" component={SignInPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
