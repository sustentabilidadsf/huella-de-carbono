import iconoInfo from "../../assets/img/icono-info.svg";
import React, {Component} from "react";
import {CarbonFootprintResultModal} from "./CarbonFootprintResultModal";


export class CarbonFootprintResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }

        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <p className="primary-text">Tu huella de carbono es de</p>
                <div className="huella-result-text-container">
                    <p className="huella-result-text">{this.props.footPrintInTons} tCO<sub>2</sub> eq</p>
                    <a onClick={this.toggleModal} href="#">
                        <img src={iconoInfo} className="icon-info" alt="icono información"/>
                    </a>
                </div>
                <CarbonFootprintResultModal onToggle={this.handleToggleModal}
                                            isOpen={this.state.modalOpen}
                                            footPrintInTons={this.props.footPrintInTons}
                                            footprintKmEquivalent={this.props.footprintKmEquivalent}/>
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
