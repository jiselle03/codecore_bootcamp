import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionNewPage } from "./QuestionNewPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";
import { Session } from "../api/session";
import { AuthRoute } from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";
import { NotFoundPage } from "./NotFoundPage";
import { Spinner } from "./Spinner";

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null,
  //     isLoading: true,
  //     showTime: true
  //   };

  //   this.getUser = this.getUser.bind(this);
  //   this.destroySession = this.destroySession.bind(this);
  // };

  const [appState, setAppState] = useState({
    currentUser: null,
    isLoading: true,
    showTime: true
  });

  const getUser = useCallback(() => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        // this.setState({ currentUser: null, isLoading: false });
        setAppState({...appState, currentUser: null, isLoading: false})
      } else {
        // this.setState({ currentUser: data, isLoading: false });
        setAppState({...appState, currentUser: data, isLoading: false});
      };
    });
  }, [appState]);

  const destroySession = () => {
    Session.destroy().then(setAppState({...appState, currentUser: null, isLoading: false}));
  };

  // componentDidMount() {
  //   this.getUser();
  // };

  useEffect(() => {
    getUser();
  }, [getUser]);

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

  // render() {
    if(appState.isLoading) {
      return(
        <Spinner message="Loading..." />
      );
    };
      
    return (
      <BrowserRouter>
        <div className="ui container segment">
          <header>
            <NavBar 
              currentUser={appState.currentUser} 
              onSignOut={destroySession} 
              showTime={appState.showTime}
            />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <AuthRoute 
            // !! turns a statement from truthy/falsy to true/false
              isAuthenticated={!!appState.currentUser}
              component={QuestionNewPage}
              path = "/questions/new"
              exact
            />
            <AuthRoute 
              isAuthenticated={!!appState.currentUser}
              component={QuestionShowPage}
              path="/questions/:id"
            />
            <Route 
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={getUser} />
              )}  
            />
            <Route 
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={getUser} />
              )}  
            />
            {/* 
            A <Route /> component without a "path" prop will render for all routes.
            This is primarily inside of a <Switch>. 
            */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  // };
};

export default App;
