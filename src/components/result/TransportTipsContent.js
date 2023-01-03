import React, {Component} from "react";
import TipTransporte from 'assets/img/tiptransporte.svg';

export class TransportTipsContent extends Component {
    render() {
        return (
            <div className="modal-tips-content">
                <div className="image-container">
                    <img src={TipTransporte} alt="andar en bicicleta"/>
                </div>
                <div className="text-container">
                    <p className="primary-text">Transporte</p>
                    <ul>
                        <li>En trayectos cortos, elegí la bicicleta, el monopatín o desplazarte a pie. Si no podés usar
                            estos
                            medios, ¡elegí el transporte público!
                        </li>
                        <li>Si tenés que moverte en auto, animate a compartir viajes de corta y larga distancia.</li>
                        <li>Si tenés que viajar en avión, elegí viajes con menor cantidad de escalas.</li>
                    </ul>
                </div>
            </div>
        );
    }
}