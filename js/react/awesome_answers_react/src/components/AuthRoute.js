import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = props => {
    // Rename the component variable to Component to make it clear that component is a user
    // defined React component. It is named with PascalCase, same as all user defined React components.
    const { isAuthenticated, component: Component, ...routeProps } = props;
    // When destructuring from an object, we can rename property names of the object using ":"

    // routeProps is an object with properties provided by the <Route /> component from react-router
    // such as: history, exact, location, etc.

    if (!isAuthenticated) {
        // Redirect to sign in page
        return <Redirect to="/sign_in" />;
    } else {
        // Allow users to correctly navigate to the page they want
        // This is done by rendering the Route component and passing it all of the pros that it needs.
        return <Route {...routeProps} component={Component} />;
    };
};
