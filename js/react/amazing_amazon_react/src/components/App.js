import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductShowPage from "./ProductShowPage";
import { ProductNewPage } from "./ProductNewPage";
import { ProductIndexPage } from "./ProductIndexPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  };

  componentDidMount() {
    Session.create({
      email: "noone@winterfell.gov",
      password: "supersecret"
    }).then(user => {
      this.setState({ currentUser: user });
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="ui container segment">
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/products" component={ProductIndexPage} />
            <Route exact path="/products/new" component={ProductNewPage} />
            <Route exact path="/products/:id" component={ProductShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
