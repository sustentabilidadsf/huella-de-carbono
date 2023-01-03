import React, {Component} from "react";

export class ProjectButton extends Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(){
        this.props.handleRedirect(this.props.projectName);
    }

    render() {
        return (
            <a className="compensation-card" onClick={this.handleRedirect}>
                <p className="base-text">{this.props.description}</p>
                <img src={this.props.image}/>
                <p className="primary-text">
                    ${this.props.pricePerTon} por tonelada
                </p>
            </a>
        );
    }
}
