import React, {Component} from 'react';
import Mundo from 'assets/img/Mundo';
import "assets/scss/styles.scss";

export class Feedback extends Component {
    render() {
        return (
            <div className="feedback-container">
                <div className="feedback-area">
                    <div className="image-container">
                        <Mundo/>
                    </div>
                    <div className="information-container">
                        <p className="primary-text">¡Felicitaciones! Cada vez estas más cerca de conocer tu huella de
                            carbono.</p>
                        <div className="progress-bar-container">
                            <div className="progress-indicator" style={{left: 25 + this.props.percentage * 0.5 + '%'}}>
                                <p>{`${this.props.percentage} %`}</p>
                            </div>
                            <div className="form-progress-bar">
                                <div className="progress-amount" style={{width: this.props.percentage + '%'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="button" className="button" value="Continuar" onClick={this.props.onContinue}/>
                </div>
            </div>
        )
    }
}
