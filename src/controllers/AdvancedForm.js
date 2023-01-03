import React, {Component} from 'react';
import "assets/scss/styles.scss";
import advancedFormQuestions from "../models/AdvancedFormQuestions";
import {Form} from "../components/Form";
import {app} from "../app/app";
import {AdvancedFormAnswers} from "../models/forms/AdvancedFormAnswers";

export class AdvancedForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    initializeSections() {
        return advancedFormQuestions;
    }

    render() {
        return <Form sections={this.initializeSections()} onFormSubmitted={this.handleFormSubmitted}/>
    }

    handleFormSubmitted(answers) {
        app.localStorage().setItem('answers', answers);
        app.localStorage().setItem('formType', 'ADVANCED');
        this.sendAnswersToServer(answers);
    }

    handleResponse(response) {
        app.localStorage().setItem('carbonFootprintResult', response.content().footprintResult);

        this.props.history.push({
            pathname: app.routes().result,
        });
    }

    sendAnswersToServer(answers) {
        const answersForServer = new AdvancedFormAnswers(answers).answersToSend();
        app.apiClient().getFootprint(answersForServer, this.handleResponse);
    }
}
