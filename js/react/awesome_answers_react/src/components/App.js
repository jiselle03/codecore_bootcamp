import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserEditPage } from "./pages/UserEditPage";
import QuestionShowPage from "./pages/QuestionShowPage";
import { QuestionNewPage } from "./pages/QuestionNewPage";
import { QuestionEditPage } from "./pages/QuestionEditPage";
import { QuestionIndexPage } from "./pages/QuestionIndexPage";
import { WelcomePage } from "./pages/WelcomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NavBar } from "./NavBar";
import { User } from "../api/user";
import { Session } from "../api/session";
import { AuthRoute } from "./AuthRoute";
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

  const [currentUser, setCurrentUser] = useState(null);
  const [showTime] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(() => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        // this.setState({ currentUser: null, isLoading: false });
        setCurrentUser(null);
        setIsLoading(false);
      } else {
        // this.setState({ currentUser: data, isLoading: false });
        setCurrentUser(data);
        setIsLoading(false);
      };
    });
  }, []);

  const destroySession = () => {
    Session.destroy().then(setCurrentUser(null));
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
    if(isLoading) {
      return(
        <Spinner message="Loading..." />
      );
    };
      
    return (
      <BrowserRouter>
        <div className="ui container segment">
          <header>
            <NavBar 
              currentUser={currentUser} 
              onSignOut={destroySession} 
              showTime={showTime}
            />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <AuthRoute 
            // !! turns a statement from truthy/falsy to true/false
              isAuthenticated={!!currentUser}
              component={QuestionNewPage}
              path = "/questions/new"
              exact
            />
            <AuthRoute 
              isAuthenticated={!!currentUser}
              component={QuestionEditPage}
              path="/questions/:id/edit"
            />
            <AuthRoute 
              isAuthenticated={!!currentUser}
              component={QuestionShowPage}
              path="/questions/:id"
            />
            <AuthRoute 
              isAuthenticated={!!currentUser}
              render={routeProps => (
                <UserEditPage {...routeProps} onUserUpdate={getUser} />
              )}
              path="/users/:id/edit"
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
