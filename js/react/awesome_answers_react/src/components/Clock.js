import React, { Component } from "react";
import { setInterval, clearInterval } from "timers";

export class Clock extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dateTime: new Date()
    //     };
    // };

    // Shortcut for setting a property on 'this' during constructor call
    // We can use this syntax in a class-based component to initialize state:
    state = {
        dateTime: new Date()
    };

    componentDidMount() {
        // The first time the component is rendered in the DOM
        // Use it to fetch, add some event listeners, connect to a socket, etc.
        this.intervalId = setInterval(() => {
            this.setState({
                dateTime: new Date()
            });
        }, 1000);
    };

    componentWillUnmount() {
        // Called before the component is removed from the DOM
        // Use it to clean up setIntervals, setTimeouts, event listeners, etc.
        clearInterval(this.intervalId)
    };

    render() {
        return (
            <div className="">
                {this.state.dateTime.toLocaleTimeString()}
            </div>
        );
    };
};