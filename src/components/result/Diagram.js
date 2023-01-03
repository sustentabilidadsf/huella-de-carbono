import React, {Component} from "react";
import Contaminacion from "../../assets/img/contaminacion.svg";
import Naturaleza from "../../assets/img/naturaleza.svg";
import Mobile from "../../assets/img/mobileIcon.svg";
import Desktop from "../../assets/img/desktopIcon.svg";
import Bandera from "../../assets/img/bandera.svg";

const ONU_GOAL = 3.25;
const MAX_VALUE = 20;
const ARGENTINE_AVERAGE = 8.8;

export class Diagram extends Component {
    render() {
        return (
            <div className="info-graphic-container">
                <div className="indicator-container">
                    <div className="indicator mi-huella"
                         style={{
                             left: this.getPercentage(this.props.carbonFootprintResult) + '%',
                             animationDelay: this.getDelay(this.props.carbonFootprintResult) + 's'
                         }}>
                        <p className="amount-co2">{this.props.carbonFootprintResult} tCO<span className="subindice">2</span> eq</p>
                        <div className="recta"/>
                        <p className="label">Mi huella</p>
                    </div>
                    <div className="indicator promedio-argentina" style={{
                        left: this.getPercentage(ARGENTINE_AVERAGE) + '%',
                        animationDelay: this.getDelay(ARGENTINE_AVERAGE) + 's'
                    }}>
                        <p className="amount-co2">{ARGENTINE_AVERAGE} tCO<span className="subindice">2</span> eq</p>
                        <div className="recta"/>
                        <div className="bandera-container">
                            <p className="label">Promedio en Argentina</p>
                            <img src={Bandera} alt="bandera argentina"/>
                        </div>
                    </div>
                    <div className="indicator objetivo-ONU" style={{
                        left: this.getPercentage(ONU_GOAL) + '%',
                        animationDelay: this.getDelay(ONU_GOAL) + 's'
                    }}>
                        <p className="amount-co2">{ONU_GOAL} tCO<span className="subindice">2</span> eq</p>
                        <div className="recta"/>
                        <p className="label">Objetivo de 1.5ºC</p>
                    </div>
                </div>
                <div className="contaminacion">
                    <img src={Contaminacion} alt="gráfico de porcentaje de contaminación"/>
                </div>
                <style>{this.contaminationImageAnimation()}</style>
                <div className="naturaleza">
                    <img src={Naturaleza} alt="gráfico de porcentaje de naturaleza"/>
                </div>
                <div className="screenshot">
                    <img src={Mobile} className="mobileIcon" alt="icono de teléfono"/>
                    <img src={Desktop} className="desktopIcon" alt="icono de computadora"/>
                    <p className="base-text">¡Saca una captura de imagen para guardar el resultado de tu huella y <span>compartilo en las redes!</span></p>
                </div>
            </div>
        )
    }

    contaminationImageAnimation() {
        let values = [ARGENTINE_AVERAGE, ONU_GOAL, this.props.carbonFootprintResult].sort((a, b) => a - b);
        return (`
          @keyframes mostrar {
            0% {
              width: 0;
            }
            ${values[0] / values[2] * 100}% {
              width: ${this.getPercentage(values[0])}%;
            }        
            ${values[1] / values[2] * 100}% {
              width: ${this.getPercentage(values[1])}%;
            }        
            100% {
              width: ${this.getPercentage(values[2])}%;
            }
          }
        `)
    }

    getDelay(value) {
        const maxValue = Math.max(ARGENTINE_AVERAGE, ONU_GOAL, this.props.carbonFootprintResult);
        const valueProportion = value / maxValue;
        return valueProportion * 10;
    }

    getPercentage(carbonFootprintValue) {
        return carbonFootprintValue / MAX_VALUE * 100;
    }
}
