import React, {Component} from "react";
import {Modal, ModalBody} from "reactstrap";
import Transferencia from 'assets/img/transferenciaIcon.svg';
import Mercadopago from "../../assets/img/mercadopago-logo.png";
import QR from "../../assets/img/QR-donaciones-1.jpg";
import {Button} from "react-materialize";


export class DonationInstructionsModal extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState()
        this.setPaymentMethod = this.setPaymentMethod.bind(this);
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }

    initialState() {
        let initialStep = 1;
        let paymentMethod = undefined;
        if (window.innerWidth < 568) {
            initialStep = 2;
            paymentMethod = "TRANSFERENCIA"
        }
        return {
            step: initialStep,
            paymentMethod: paymentMethod
        }
    }



    setPaymentMethod(event) {
        this.setState({step: 2, paymentMethod: event.currentTarget.value});
    }

    back() {
        const nextStep = this.state.step - 1;
        this.setState({step: nextStep});
    }

    next() {
        const nextStep = this.state.step + 1;
        this.setState({step: nextStep});
    }

    handleToggleModal() {
        this.props.onToggle();
        this.setState(this.initialState());
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.handleToggleModal}>
                <ModalBody>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={this.handleToggleModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.renderTipsModalContent()}
                </ModalBody>
            </Modal>
        )
    }

    renderStep1() {
        return (
            <div className="step1">
                <p className="title">Elije un medio de pago:</p>
                <div className="paid-options-container">
                    <Button className="paid-option" value="MERCADO_PAGO" onClick={this.setPaymentMethod}>
                        <img className="mercadopago" src={Mercadopago}/>
                        <p className="base-text">Pagar con código QR</p>
                    </Button>
                    <Button className="paid-option" value="TRANSFERENCIA" onClick={this.setPaymentMethod}>
                        <img className="transferencia" src={Transferencia}/>
                        <p className="base-text">Quiero hacer una transferencia</p>
                    </Button>
                </div>
            </div>
        );
    }

    renderStep2() {
        const paymentMethod = this.state.paymentMethod;
        if (paymentMethod === "MERCADO_PAGO") {
            return this.renderMercadoPagoStep2();
        }
        if (paymentMethod === "TRANSFERENCIA") {
            return this.renderTransferStep2();
        }
        return <React.Fragment/>;
    }

    renderTransferStep2() {
        return (
            <div className="step2 bankpaid">
                <div className="text-container">
                    <p className="base-text">
                        Te compartimos los datos de nuestra cuenta para que guardes los datos y puedas transferir.
                    </p>
                    <p className="title">BANCO PROVINCIA</p>
                    <ul>
                        <li className="base-text">
                            <span>Titular:</span> FUNDACION SUSTENTABILIDAD SIN
                            FRONTERAS
                        </li>
                        <li className="base-text">
                            <span>Número de Cuenta:</span> 5063-54082/5
                        </li>
                        <li className="base-text">
                            <span>CUIL/CUIT:</span> 30-71611110-1
                        </li>
                        <li className="base-text">
                            <span>CBU:</span> 0140035901506305408251
                        </li>
                        <li className="base-text">
                            <span>CBU Alias:</span> sustentabilidad
                        </li>
                    </ul>
                </div>
                {this.stepsNavButtons()}
            </div>
        );
    }

    renderMercadoPagoStep2() {
        return (
            <div className="step2 QRpaid">
                <p className="title">¿Cómo funciona?</p>
                <div className="paid-container">
                    <img className="QR" src={QR}/>
                    <div className="text-container">
                        <ul>
                            <li>
                                <p className="base-text">
                                    1. Abrí la app <span>MercadoPago</span>.
                                </p>
                            </li>
                            <li>
                                <p className="base-text">
                                    2. Elegí la opción <span>Código QR</span> y escaneá la imagen.
                                </p>
                            </li>
                            <li>
                                <p className="base-text">
                                    3. Ingresá el monto a donar.
                                </p>
                            </li>
                            <li>
                                <p className="base-text">
                                    4. Hacé click en <span>Pagar</span>(nosotros sabemos que es una donación y no un
                                    pago).
                                </p>
                            </li>
                            <li>
                                <p className="base-text">
                                    5. Escribinos por mail o whatsapp para avisarnos y que podamos agradecerte.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.stepsNavButtons()}
            </div>
        );
    }

    stepsNavButtons() {
        return <div className="buttons-container">
            <Button className="main-button back" onClick={this.back}>
                Volver
            </Button>
            <Button className="main-button" onClick={this.next}>
                Continuar
            </Button>
        </div>;
    }

    renderStep3() {
        return (
            <div className="step3">
                <p className="title">
                    ¡Muchas gracias por tu colaboración!
                </p>
                <p className="base-text">
                    Completa el formulario a continuación, para que tu colaboración llegue a su destino y poder
                    conocer un poco mas de vos!
                </p>
                <div className="buttons-container">
                    <Button className="main-button back" onClick={this.back}>
                        Volver
                    </Button>
                    <a href="https://docs.google.com/forms/d/1ed38QqeWG0FWkR-d9xpsB8Mwf1598IHLiAAYNJkj3_M/viewform?edit_requested=true"
                       target="_blank" className="main-button">Ir al formulario</a>
                </div>

            </div>
        );
    }

    renderStepsIndicators() {
        return [1,2,3].map((stepNumber) => {
            const cssClass = this.state.step === stepNumber ? "step-number active" : "step-number";
            return (
                <div key={stepNumber} className={cssClass}>
                    <p className="primary-text">{stepNumber}</p>
                </div>
            )
        })
    }

    renderStepsInfo() {
        return (
            <div className="steps-container-indicator">
                {this.renderStepsIndicators()}
            </div>
        );
    }

    renderSteps() {
        const actualStep = this.state.step;
        if (actualStep === 1) {
            return this.renderStep1();
        }
        if (actualStep === 2) {
            return this.renderStep2();
        }
        return this.renderStep3();
    }

    renderTipsModalContent() {
        return (
            <div className="donationModalContainer">
                {this.renderStepsInfo()}
                {this.renderSteps()}
            </div>
        )
    }
}
