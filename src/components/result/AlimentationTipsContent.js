import React, {Component} from "react";
import TipAlimentacion from 'assets/img/tipalimentacion.svg';

export class AlimentationTipsContent extends Component {
    render() {
        return (
            <div className="modal-tips-content">
                <div className="image-container">
                    <img src={TipAlimentacion} alt="andar en bicicleta"/>
                </div>
                <div className="text-container">
                    <p className="primary-text">Alimentación</p>
                    <ul>
                        <li>Consumí productos locales y de temporada.</li>
                        {this.renderMeatConsumptionTip()}
                    </ul>
                </div>
            </div>
        );
    }

    renderMeatConsumptionTip() {
        if (this.props.meatConsumption > 0) {
            return (
                <li>
                    Reducí el consumo de carne, reemplazando el aporte de proteínas por legumbres, quinoa, almendras,
                    nueces y semillas.
                </li>
            );
        }
    }
}