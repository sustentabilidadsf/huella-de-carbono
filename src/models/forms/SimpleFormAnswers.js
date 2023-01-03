import {FormAnswers} from "./FormAnswers";

export class SimpleFormAnswers extends FormAnswers {
    separatesTrash() {
        return false;
    }

    makesCompost() {
        return false;
    }

    internetUse() {
        return 0;
    }
}