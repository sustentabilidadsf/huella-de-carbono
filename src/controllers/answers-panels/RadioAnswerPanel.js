import React from "react";
import {AnswerPanel} from "./AnswerPanel";


export class RadioAnswerPanel extends AnswerPanel {

    _renderWidget() {
        return this.props.question.options.map((option, index) => {
            return (
                <React.Fragment>
                    <div className="radio-option">
                        <input className={this.cssClassName()} onChange={this.handleChange} type="radio" id={option}
                               checked={this.props.answer === option} name="question" value={option}/>
                        <label htmlFor={option}>
                            {this.props.question.optionsLabel[index]}
                        </label>
                    </div>
                </React.Fragment>
            )
        });
    }

    handleChange(event) {
        this.props.onChange(event.currentTarget.value);
    }
}
