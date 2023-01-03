import {isNumeric} from "../../utils/isNumeric";

export class FormAnswers {
    constructor(answers) {
        this._answers = this.collapseAnswers(answers);
    }

    collapseAnswers(answers) {
        let allAnswers = {};
        for (let sectionAnswers of answers) {
            allAnswers = {...allAnswers, ...sectionAnswers};
        }

        Object.keys(allAnswers).map(function(key) {
            if (isNumeric(allAnswers[key])) {
                allAnswers[key] = parseFloat(allAnswers[key]);
            }
        });

        return allAnswers;
    }

    answersToSend() {
        return this._answers;
    }

    meatConsumption() {
        return this._answers.meatConsumption;
    }

    separatesTrash() {
        throw new Error("Subclass responsibility");
    }

    makesCompost() {
        throw new Error("Subclass responsibility");
    }

    internetUse() {
        throw new Error("Subclass responsibility");
    }
}
