import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductShowPage from "./ProductShowPage";
import { ProductNewPage } from "./ProductNewPage";
import { ProductEditPage } from "./ProductEditPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";
import { Session } from "../api/session";
import { AuthRoute } from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";
import { Spinner } from "./Spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: true
    };
  };

  getUser = () => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        this.setState({ currentUser: null, isLoading: false });
      } else {
        this.setState({ currentUser: data, isLoading: false });
      };
    });
  };

  destroySession = () => {
    Session.destroy().then(this.setState({ currentUser: null }));
  };

  componentDidMount() {
    this.getUser();
  };

  render() {
    if(this.state.isLoading) {
      return(
        <Spinner message="Authenticating user..." />
      );
    };

    return (
      <BrowserRouter>
        <div className="ui container segment">
          <header>
          <NavBar 
              currentUser={this.state.currentUser} 
              onSignOut={this.destroySession} 
            />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/products" component={ProductIndexPage} />
            <AuthRoute 
              isAuthenticated={!!this.state.currentUser}
              component={ProductNewPage}
              path="/products/new"
              exact
            />
            <AuthRoute 
              isAuthenticated={!!this.state.currentUser}
              component={ProductEditPage}
              path="/products/:id/edit"
            />
            <Route path="/products/:id" component={ProductShowPage} />
            <Route 
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}  
            />
            <Route 
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}  
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
