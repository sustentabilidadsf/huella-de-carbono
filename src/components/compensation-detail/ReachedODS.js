import React, {Component} from "react";

export class ReachedODS extends Component {
    renderODSs() {
        return this.props.ods.map((odsInfo, index) => {
            return (
                <a key={index} href={odsInfo.link} target='_blank'>
                    <img src={odsInfo.image}/>
                </a>
            );
        })
    }

    render() {
        return (
            <div className="ODS-container">
                <p className="primary-text">ODS alcanzados:</p>
                <div className="ODS-items">
                    {this.renderODSs()}
                </div>
            </div>
        );
    }
}