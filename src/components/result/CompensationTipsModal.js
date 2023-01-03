import React, {Component} from "react";
import {Modal, ModalBody} from "reactstrap";
import {TransportTipsContent} from "./TransportTipsContent";
import {ConsumptionTipsContent} from "./ConsumptionTipsContent";
import {AlimentationTipsContent} from "./AlimentationTipsContent";
import {LifestyleTipsContent} from "./LifestyleTipsContent";

export class CompensationTipsModal extends Component {
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
        if (this.props.tipShowed === 'transport') {
            return this.renderTransportTips();
        } else if (this.props.tipShowed === 'energy') {
            return this.renderConsumptionTips();
        } else if (this.props.tipShowed === 'food') {
            return this.renderAlimentationTips();
        } else if (this.props.tipShowed === 'recycling') {
            return this.renderLifestyleTips();
        }
    }

    renderLifestyleTips() {
        return <LifestyleTipsContent separatesTrash={this.props.formAnswers.separatesTrash()}
                                     makesCompost={this.props.formAnswers.makesCompost()} />
    }

    renderAlimentationTips() {
        return <AlimentationTipsContent meatConsumption={this.props.formAnswers.meatConsumption()}/>
    }

    renderConsumptionTips() {
        return <ConsumptionTipsContent internetUse={this.props.formAnswers.internetUse()}/>
    }

    renderTransportTips() {
        return <TransportTipsContent/>
    }
}
