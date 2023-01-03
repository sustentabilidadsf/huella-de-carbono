import React, {Component} from "react";
import TipEnergia from 'assets/img/tipenergia.svg';

export class ConsumptionTipsContent extends Component {
    render() {
        return (
            <div className="modal-tips-content">
                <div className="image-container">
                    <img src={TipEnergia} alt="andar en bicicleta"/>
                </div>
                <div className="text-container">
                    <p className="primary-text">Energía</p>
                    <ul>
                        <li>Elegí artefactos con alta eficiencia energética (categoría A) e iluminaria LED o de
                            bajo consumo.
                        </li>
                        <li>Utilizá el aire acondicionado en 24 ºC para frío y 20 °C para calefacción.</li>
                        <li>Desenchufá los aparatos electrónicos cuando no los estás usando.</li>
                        <li>Si está en tus posibilidades, ¡invertí en paneles o calefones solares!</li>
                        {this.renderInternetTip()}
                    </ul>
                </div>
            </div>
        );
    }

    renderInternetTip() {
        if (this.props.internetUse > 0) {
            return (
                <li>
                    Hacé un uso racional de internet. Las búsquedas excesivas, el streaming y el almacenamiento
                    en la nube también demandan energía.
                </li>
            );
        }
    }
}