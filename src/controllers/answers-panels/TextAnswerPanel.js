import React from "react";
import {AnswerPanel} from "./AnswerPanel";


export class TextAnswerPanel extends AnswerPanel {

    _renderWidget() {
        return (
            <React.Fragment>
                <input type="text" className={this.cssClassName()} value={this.props.answer} id={this.props.question.id} name={"question-" + this.props.question.id} onChange={this.handleChange} />
                <p className="label base-text answer-unit">{this.props.question.unit}</p>
            </React.Fragment>
        )
    }

    handleChange(event) {
        this.props.onChange(event.currentTarget.value);
    }
}
