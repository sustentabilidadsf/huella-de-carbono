import React, {Component} from "react";

export class OrganizationLogo extends Component {
    render() {
        return (
            <div className="compensation-sponsor">
                <p className="base-text">Compensación realizada en conjunto con:</p>
                <img src={this.props.logo} className="logo-sponsor" alt="logo"/>
            </div>
        );
    }
}