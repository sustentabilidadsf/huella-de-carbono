import React from "react";


export class AnswerPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="input-label-container">
                {this._renderWidget()}
            </div>
        )
    }

    _renderWidget() {
        throw Error("Subclass responsibility")
    }

    // handlers

    handleChange() {
        throw Error("Subclass responsibility")
    }

    cssClassName() {
        if (!this.props.answerValid) {
            return "error"
        }
    }
}
