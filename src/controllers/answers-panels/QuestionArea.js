import React from "react";
import {TextAnswerPanel} from "./TextAnswerPanel";
import {SelectAnswerPanel} from "./SelectAnswerPanel";
import {RadioAnswerPanel} from "./RadioAnswerPanel";


export class QuestionArea extends React.Component {
    render() {
        return <div className="question-area">
            {this.renderQuestion(this.props.question)}
            {this.renderAnswerPanel(this.props.question)}
        </div>
    }

    renderQuestion(question) {
        return (
            <React.Fragment>
                <p className="primary-text">{question.question}</p>
                <p className="base-text">{question.helptext1}</p>
                <p className="tertiary-text">{question.helptext2}</p>
            </React.Fragment>
        )
    }

    renderAnswerPanel(question) {
        /* TODO: Reemplazar el case por un diccionario para detectar el tipo de respuesta */
        if (question.type === 'text') {
            return <TextAnswerPanel answerValid={this.props.answerValid} answer={this.props.answer} onChange={this.props.onChange} question={question}/>;
        }
        if (question.type === 'select') {
            return <SelectAnswerPanel answerValid={this.props.answerValid} answer={this.props.answer} onChange={this.props.onChange} question={question}/>;
        }
        if (question.type === 'radio') {
            return <RadioAnswerPanel answerValid={this.props.answerValid} answer={this.props.answer} onChange={this.props.onChange} question={question}/>;
        }
    }

}
