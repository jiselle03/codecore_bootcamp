import React from 'react';

import { FormErrors } from "./FormErrors";

export const QuestionForm = props => {
    let doAction;
    if (props.onUpdateQuestion) {
        doAction = props.onUpdateQuestion;
    } else {
        doAction = props.onCreateQuestion;
    };

    let updateQuestion = { title: "", body: "" }
    let questionPlaceholder = { ...updateQuestion };
    
    if (props.question) {
        updateQuestion = {
            title: props.question.title,
            body: props.question.body
        };
    } else {
        questionPlaceholder = {
            title: "Enter question title",
            body: "Enter question body"
        }
    };

    return (
        <form 
            className="ui form" 
            onSubmit={event => doAction(event)}
        >
            <div className="field">
                <label htmlFor="title">Title</label>
                <FormErrors errors={props.errors} forField="title" />
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    defaultValue={updateQuestion.title} 
                    placeholder={questionPlaceholder.title} 
                />
            </div>
            <div className="field">
                <label htmlFor="body">Body</label>
                <FormErrors errors={props.errors} forField="body" />
                <textarea 
                    name="body" 
                    id="body" 
                    defaultValue={updateQuestion.body} 
                    placeholder={questionPlaceholder.title} 
                />
            </div>
            <button className="ui orange button" type="submit">
                {props.buttonMessage}
            </button>
        </form>
    );
};
