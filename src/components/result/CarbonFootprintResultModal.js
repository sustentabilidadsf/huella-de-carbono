import React, {Component} from "react";
import {Modal, ModalBody} from "reactstrap";
import iconoInfo from "../../assets/img/icono-info.svg";

export class CarbonFootprintResultModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
                <ModalBody>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                     onClick={this.props.onToggle}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.renderTipsModalContent()}
                </ModalBody>
            </Modal>
        )
    }

    renderTipsModalContent() {
        return (
            <div className="details-carbonFootprint-result">
                <img src={iconoInfo} className="icon-info" alt="icono información"/>
                <p className="anual-value">Corresponde a un valor anual.</p>
                    <p className="huella-result-text">{this.props.footPrintInTons} tCO<sub>2</sub> eq</p>
                    <p className="base-text">({this.props.footPrintInTons} toneladas de dióxido de carbono equivalente)</p>
                    <p className="equivalent-result-text">Representa a un viaje en auto de {this.props.footprintKmEquivalent} km</p>
            </div>
        )
    }
}
