import React, {Component} from 'react';
import ComprobanteHC from 'assets/img/comprobanteHC.svg';
import Fotos from 'assets/img/fotos.svg';
import "assets/scss/styles.scss";
import {DonationInstructionsModal} from "../components/result/DonationInstructionsModal";
import {ReachedODS} from 'components/compensation-detail/ReachedODS';
import compensationProyects from "../models/compensation/CompensationProject";
import {app} from "../app/app";
import {OrganizationLogo} from "../components/compensation-detail/OrganizationLogo";


export class CompensationDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }

        this.carbonFootprintValue = app.localStorage().getItem('carbonFootprintResult').total;
        const projectName = app.localStorage().getItem('compensationProjectName');
        this.project = compensationProyects[projectName];

        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    moneyForNeutralCarbonFootprint() {
        return Math.round(this.carbonFootprintValue * this.project.pricePerTon, 2);
    }


    render() {
        return (
            <React.Fragment>
                <div className="compensation-details-container">
                    <p className="amountHC">Tu huella de carbono es de <span>{this.carbonFootprintValue} tCO<sub>2</sub> eq</span>
                    </p>
                    <div className="donation-payment-container">
                        <div className="donation-payment-text">
                            <p className="primary-text">Donación sugerida para ser Carbono Neutral: <span>${this.moneyForNeutralCarbonFootprint()}</span></p>
                        </div>
                        <div className="donation-payment-button">
                            <a onClick={this.toggleModal} className="main-button">Compensar ahora</a>
                        </div>
                    </div>
                    <DonationInstructionsModal onToggle={this.handleToggleModal} isOpen={this.state.modalOpen}/>
                    <div className="compensation-description">
                        <p className="base-text">
                            {this.project.description}
                        </p>
                        <img src={this.project.image}/>
                    </div>
                    <div className="items-included-container">
                        <p className="items-title">Incluye:</p>
                        <div className="item">
                            <img src={ComprobanteHC}/>
                            <p className="base-text">Comprobante de compensación de HC</p>
                        </div>
                        <div className="item">
                            <img src={Fotos}/>
                            <p className="base-text">Imágenes del área y georreferencia de las hectáreas adquiridas.</p>
                        </div>
                    </div>
                    <OrganizationLogo logo={this.project.organizationLogo}/>
                    <ReachedODS ods={this.project.odssReached}/>
                </div>
            </React.Fragment>
        )
    }


    handleToggleModal() {
        this.toggleModal();
    }

    toggleModal() {
        this.setState({modalOpen: !this.state.modalOpen})
    }
}
