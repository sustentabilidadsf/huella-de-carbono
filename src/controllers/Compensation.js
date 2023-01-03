import React, {Component} from 'react';
import {app} from "app/app";
import compensationProyects from "../models/compensation/CompensationProject"
import "assets/scss/styles.scss";
import { ProjectButton } from 'components/compensation/ProjectButton';


export class Compensation extends Component {
    constructor(props) {
        super(props);
        this.projects = compensationProyects;
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    // render

    _renderButtons() {
        return Object.keys(this.projects).map( (projectName, index) => {
            const project = this.projects[projectName];
            return <ProjectButton key={index} image={project.image}
                                  projectName={projectName}
                                  description={project.smallDescription}
                                  pricePerTon={project.pricePerTon}
                                  handleRedirect={this.handleRedirect}/>;
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="compensation-cards-container">
                    <p className="secondary-text">Elije una opción para compensar</p>
                    <div className="compensation-card-selection">
                        {this._renderButtons()}
                    </div>
                </div>
            </div>
        )
    }

    // handle

    handleRedirect(projectName) {
        this.persistSelectedProjectInLocalStorage(projectName);
        this.redirectToProjectDetail();
    }

    // aux

    redirectToProjectDetail() {
        this.props.history.push(app.routes().compensationDetail);
    }

    persistSelectedProjectInLocalStorage(projectName) {
        app.localStorage().setItem('compensationProjectName', projectName);
    }

}
