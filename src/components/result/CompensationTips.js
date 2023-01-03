import React, {Component} from "react";
import iconoTransporte from "../../assets/img/icono-transporte.svg";
import iconoAlimentacion from "../../assets/img/icono-alimentacion.svg";
import iconoEnergia from "../../assets/img/icono-energia.svg";
import iconoHogar from "../../assets/img/icono-hogar.svg";
import {CompensationTipsModal} from "./CompensationTipsModal";

export class CompensationTips extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            tipShowed: ''
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.transportModalToggle = this.transportModalToggle.bind(this);
        this.foodModalToggle = this.foodModalToggle.bind(this);
        this.energyModalToggle = this.energyModalToggle.bind(this);
        this.recyclingModalToggle = this.recyclingModalToggle.bind(this);
    }

    render() {
        return (
            <div className="compensation-tips-containers">
                <p className="primary-text">Consejos para reducir tu huella</p>
                <div className="compensation-tips">
                    <a onClick={this.transportModalToggle} href="#">
                        <img src={iconoTransporte} className="icon-nav" alt="icono transporte"/>
                    </a>
                    <a onClick={this.foodModalToggle} href="#">
                        <img src={iconoAlimentacion} className="icon-nav" alt="icono alimentación"/>
                    </a>
                    <a onClick={this.energyModalToggle} href="#">
                        <img src={iconoEnergia} className="icon-nav" alt="icono energia"/>
                    </a>
                    <a onClick={this.recyclingModalToggle} href="#">
                        <img src={iconoHogar} className="icon-nav" alt="icono reciclaje"/>
                    </a>
                </div>
                {this.renderTipsModal()}

            </div>
        )
    }

    renderTipsModal() {
        return (
            <CompensationTipsModal isOpen={this.state.modalOpen} tipShowed={this.state.tipShowed}
                                   onToggle={this.handleToggle} formAnswers={this.props.formAnswers}/>
        )
    }

    transportModalToggle() {
        this.modalToggle();
        this.setTipShowed('transport');
    }

    foodModalToggle() {
        this.modalToggle();
        this.setTipShowed('food');
    }

    energyModalToggle() {
        this.modalToggle();
        this.setTipShowed('energy');
    }

    recyclingModalToggle() {
        this.modalToggle();
        this.setTipShowed('recycling');
    }

    handleToggle() {
        this.modalToggle();
    }

    modalToggle() {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    setTipShowed(tipShowed) {
        this.setState({tipShowed: tipShowed})
    }
}
