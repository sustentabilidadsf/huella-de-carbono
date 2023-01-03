import React from "react";
import {AnswerPanel} from "./AnswerPanel";


export class SelectAnswerPanel extends AnswerPanel {

    _renderWidget() {
        return (
            <select className={this.cssClassName()} onChange={this.handleChange}>
                <option value="" key="seleccione">Seleccione</option>
                {this.props.question.options.map(option => {
                    return (
                        <option selected={this.props.answer === option} value={option} key={option}>{option}</option>
                    )
                })}
            </select>
        )
    }

    handleChange(event) {
        this.props.onChange(event.currentTarget.value);
    }
}
