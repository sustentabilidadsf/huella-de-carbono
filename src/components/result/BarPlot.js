import React, {Component} from "react";

export class BarPlot extends Component {
    render() {
        return (
            <ul>
                <li>
                    <p className="category-title">Transporte</p>
                    <div className="data">
                        <p className="huella-amount">{this.props.carbonFootprintTransport} tCO<sub>2</sub> eq</p>
                        <div className="resume-bar-container">
                            <div className="resume-bar -transporte"
                                 style={{width: this.getPercentage(this.props.carbonFootprintTransport) + '%'}}/>
                            <div className="resume-bar-background"/>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="category-title">Alimentación</p>
                    <div className="data">
                        <p className="huella-amount">{this.props.carbonFootprintNutrition} tCO<sub>2</sub> eq</p>
                        <div className="resume-bar-container">
                            <div className="resume-bar -alimentacion"
                                 style={{width: this.getPercentage(this.props.carbonFootprintNutrition) + '%'}}/>
                            <div className="resume-bar-background"/>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="category-title">Servicios</p>
                    <div className="data">
                        <p className="huella-amount">{this.props.carbonFootprintEnergy} tCO<sub>2</sub> eq</p>
                        <div className="resume-bar-container">
                            <div className="resume-bar -energia"
                                 style={{width: this.getPercentage(this.props.carbonFootprintEnergy) + '%'}}/>
                            <div className="resume-bar-background"/>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="category-title">Estilo de vida</p>
                    <div className="data">
                        <p className="huella-amount">{this.props.carbonFootprintHome} tCO<sub>2</sub> eq</p>
                        <div className="resume-bar-container">
                            <div className="resume-bar -hogar"
                                 style={{width: this.getPercentage(this.props.carbonFootprintHome) + '%'}}/>
                            <div className="resume-bar-background"/>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="category-title"><strong>Total</strong></p>
                    <div className="data">
                        <p className="huella-amount"><strong>{this.props.carbonFootprintTotal} tCO<sub>2</sub> eq</strong></p>
                        <div className="resume-bar-container"/>
                    </div>
                </li>
            </ul>
        )
    }

    getPercentage(carbonFootprintValue) {
        return carbonFootprintValue / this.props.carbonFootprintTotal * 100;
    }
}
