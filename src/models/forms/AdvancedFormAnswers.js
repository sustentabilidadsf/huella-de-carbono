import {separationMethodsOptions} from "../AdvancedFormQuestions";
import {FormAnswers} from "./FormAnswers";
import {yesNoOptions} from "../../utils/options";

export class AdvancedFormAnswers extends FormAnswers {
    answersToSend() {
        return {
            ...super.answersToSend(),
            ...this.trashSeparationAnswers()
        }

    }

    trashSeparationAnswers() {
        return {
            "recycles": this.separatesTrash() && this.recycles(),
            "composts": this.separatesTrash() && this.makesCompost(),
        }
    }

    recyclesOptions() {
        return [separationMethodsOptions[0], separationMethodsOptions[2]];
    }

    compostsOptions() {
        return [separationMethodsOptions[1], separationMethodsOptions[2]];
    }

    separatesTrash() {
        return this._answers.doYouSeparate === yesNoOptions[0];
    }

    makesCompost() {
        return this.compostsOptions().includes(this._answers.separationMethods);
    }

    recycles() {
        return this.recyclesOptions().includes(this._answers.separationMethods);
    }

    internetUse() {
        return this._answers.internetUse;
    }

    bagSize() {
        return this._answers.bagSize;
    }

    peopleInHome() {
        return this._answers.peopleInHome + 1;
    }

    numberOfBagsPerWeek() {
        return this._answers.numberOfBagsPerWeek;
    }

    gasConsumption() {
        return this._answers.gasConsumption;
    }

    gasCarafeConsumption() {
        return this._answers.gasCarafeConsumption;
    }

    electricConsumption() {
        return this._answers.electricConsumption;
    }

    averagePersonPerCar() {
        return this._answers.averagePersonPerCar + 1;
    }

    carEfficiency() {
        return this._answers.carEfficiency;
    }

    carFuelType() {
        return this._answers.carFuelType;
    }

    kilometersTraveledByCar() {
        return this._answers.kilometersTraveledByCar;
    }

    kilometersTraveledByTaxi() {
        return this._answers.kilometersTraveledByTaxi;
    }

    kilometersTraveledByMotorcycle() {
        return this._answers.kilometersTraveledByMotorcycle;
    }
}
