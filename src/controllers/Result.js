import React, {Component} from 'react';
import "assets/scss/styles.scss";
import {Diagram} from "../components/result/Diagram";
import {BarPlot} from "../components/result/BarPlot";
import {CompensationTips} from "../components/result/CompensationTips";
import {app} from "../app/app";
import {CarbonFootprintResult} from "../components/result/CarbonFootprintResult";
import {Link} from "react-router-dom";
import {AdvancedFormAnswers} from "../models/forms/AdvancedFormAnswers";
import {SimpleFormAnswers} from "../models/forms/SimpleFormAnswers";
import {calculateFootPrintInKm} from "../utils/calculateFootPrintInKm";

export class Result extends Component {
    constructor(props) {
        super(props);
        const formType = app.localStorage().getItem('formType');
        const answers = app.localStorage().getItem('answers');
        this.state = {
            formType: formType,
            carbonFootprintResult: app.localStorage().getItem('carbonFootprintResult'),
            formAnswers: this.getFormAnswers(formType, answers)
        }
    }

    componentDidMount() {
        this.redirectIfNoData();
    }

    // render

    render() {
        if (this.state.carbonFootprintResult) {
            return (
                <div className="result-container">
                    <div className="resume-results-container">

                        <div className="result-content">
                            <div className="resume-results-content">
                                {this.renderCarbonFootprintResult()}
                                {this.renderBarPlotResult()}
                            </div>
                            <CompensationTips formAnswers={this.state.formAnswers}/>
                            <Link to={app.routes().compensation} className="main-button">
                                Conocé cómo compensar
                            </Link>
                        </div>

                        {this.renderDiagramResult()}
                    </div>

                </div>
            )
        } else {
            return 'Cargando'
        }
    }

    renderDiagramResult() {
        return <Diagram carbonFootprintResult={this.state.carbonFootprintResult.total}/>;
    }

    renderCarbonFootprintResult() {
        return <CarbonFootprintResult footPrintInTons={this.state.carbonFootprintResult.total}
                                      footprintKmEquivalent={this.calculateFootprintInKm()}/>
    }

    renderBarPlotResult() {
        if (this.state.formType === 'ADVANCED') {
            return <BarPlot carbonFootprintTransport={this.state.carbonFootprintResult.transport}
                            carbonFootprintNutrition={this.state.carbonFootprintResult.nutrition}
                            carbonFootprintEnergy={this.state.carbonFootprintResult.energy}
                            carbonFootprintHome={this.state.carbonFootprintResult.home}
                            carbonFootprintTotal={this.state.carbonFootprintResult.total}/>;
        }
    }

    // aux

    calculateFootprintInKm() {
        if (this.state.carbonFootprintResult) {
            return calculateFootPrintInKm(this.state.carbonFootprintResult.total)
        }
    }

    getFormAnswers(formType, answers) {
        if (formType === 'ADVANCED') {
            return new AdvancedFormAnswers(answers);
        } else if (formType === 'SIMPLE') {
            return new SimpleFormAnswers(answers);
        }
        return null;
    }

    redirectIfNoData() {
        if (!this.answersExists()) {
            this.props.history.push(app.routes().home);
        }
    }

    answersExists() {
        return this.state.formAnswers !== null;
    }
}
