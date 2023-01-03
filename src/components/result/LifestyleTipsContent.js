import React, {Component} from "react";
import TipHogar from 'assets/img/tiphogar.svg';

export class LifestyleTipsContent extends Component {
    render() {
        return (
            <div className="modal-tips-content">
                <div className="image-container">
                    <img src={TipHogar} alt="andar en bicicleta"/>
                </div>
                <div className="text-container">
                    <p className="primary-text">Hogar</p>
            <ul>
                <li>Usá recipientes reutilizables, elegí productos con poco embalaje y evitá el uso de bolsas plásticas
                    y envases descartables.</li>
                <li>Comprá lo que realmente necesites. La mejor basura es la que no se genera.</li>
                {this.renderRecyclablesSeparationTip()}
                {this.renderCompostTip()}
            </ul>
                </div>
            </div>
        );
    }

    renderRecyclablesSeparationTip() {
        if (!this.props.separatesTrash) {
            return (
                <li>
                    Separá siempre tus residuos en reciclables, no reciclables y orgánicos. Todo junto es basura,
                    pero si lo separamos son nuevos materiales.
                </li>
            );
        }
    }

    renderCompostTip() {
        if (!this.props.makesCompost) {
            return (
                <li>
                    Con los orgánicos podés elaborar tu propio compost.
                </li>
            );
        }
    }
}