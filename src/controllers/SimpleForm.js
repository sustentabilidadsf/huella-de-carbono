import React, {Component} from "react";
import simpleFormQuestions from "../models/SimpleFormQuestions";
import {Form} from "../components/Form";
import {app} from "../app/app";
import {SimpleFormAnswers} from "../models/forms/SimpleFormAnswers";


export default class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    initializeSections() {
        return [{questions: simpleFormQuestions, name: 'Formulario Simple'}];
    }

    render() {
        return <Form sections={this.initializeSections()} onFormSubmitted={this.handleFormSubmitted} />
    }

    handleResponse(response) {
        app.localStorage().setItem('carbonFootprintResult', response.content().footprintResult);

        this.props.history.push({
            pathname: app.routes().result,
        });
    }

    sendAnswersToServer(answers) {
        const answersForServer = new SimpleFormAnswers(answers).answersToSend();
        const serverData = {
            ...answersForServer, 'type': 'simple'
        };
        app.apiClient().getFootprint(serverData, this.handleResponse);
    }


    handleFormSubmitted(answers) {
        app.localStorage().setItem('answers', answers);
        app.localStorage().setItem('formType', 'SIMPLE');
        this.sendAnswersToServer(answers);
    }
}
