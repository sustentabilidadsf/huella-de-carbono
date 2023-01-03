import {isNumeric} from "../utils/isNumeric";
import Transporte from "../assets/img/Transporte";
import Alimentacion from "../assets/img/Alimentacion";
import Energia from "../assets/img/Energia";
import Personal from "../assets/img/Personal";
import provinces from "../utils/provinces";
import {genderOptions, optionsEnviormentalKnowledge, yesNoOptions} from "../utils/options";

export default
[
    {
        "id": 'kilometersTraveledByCar',
        "animation": Transporte,
        "question": "¿Cuántos km hacés en auto por mes?",
        "helptext1": "Considerá en tu respuesta sólo las actividades de rutina e incluí el uso de taxi / uber / cabify.",
        "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
        "type": 'text',
        "unit": "km",
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'kilometersTraveledByMotorcycle',
        "animation": Transporte,
        "question": "¿Cuántos km hacés en moto por mes?",
        "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
        "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
        "type": 'text',
        "unit": "km",
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'kilometersTraveledByPublicTransport',
        "animation": Transporte,
        "question": "¿Cuántos km hacés en transporte público por mes? ",
        "helptext1": "Considerá en tu respuesta las actividades de rutina. ",
        "helptext2": 'Si no usás transporte público, completá con 0.',
        "type": 'text',
        "unit": "km",
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'meatConsumption',
        "animation": Alimentacion,
        "question": "¿Cuántas veces por semana comés carne (roja o blanca?)",
        "helptext1": null,
        "helptext2": 'Si no comés carne, completa con 0.',
        "type": 'text',
        "unit": "",
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'electricConsumption',
        "animation": Energia,
        "question": "¿Cuántos kW.h consumen por mes en tu hogar? ¡Podés buscarlo en tu factura de luz!",
        "helptext1": "Si no usás electricidad, completá con 0.",
        "helptext2": 'Si no sabés la respuesta pasa a la siguiente pregunta.',
        "type": 'text',
        "validator": (answer) => { return answer === "" || isNumeric(answer)}
    },
    {
        "id": 'consumptionArea',
        "animation": Energia,
        "question": "Elegí donde vivís en el desplegable para que podamos usar la media de consumo.",
        "helptext1": null,
        "helptext2": null,
        "validator": (answer) => { return provinces.includes(answer) },
        "type": 'select',
        "options": provinces,
        "onlyIf" : ['electricConsumption', (value) => {return value === ""}]
    },
    {
        "id": 'peopleInHome',
        "animation": Energia,
        "question": "¿Con cuántas personas vivís?",
        "helptext1": "Si vivís solo, completá con 0",
        "helptext2": null,
        "type": 'text',
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'personAge',
        "animation": Personal,
        "question": "¿Cuántos años tenés?",
        "helptext1": null,
        "helptext2": null,
        "type": 'text',
        "validator": (answer) => { return answer !== "" && isNumeric(answer)}
    },
    {
        "id": 'genreSelection',
        "animation": Personal,
        "question": "¿Cuál es tu género?",
        "helptext1": null,
        "helptext2": null,
        "validator": (answer) => { return genderOptions.includes(answer) },
        "type": 'radio',
        "options": genderOptions,
        "optionsLabel": genderOptions
    },
    {
        "id": 'environmentalKnowledge',
        "animation": Personal,
        "question": "¿Cuál es tu nivel de conocimiento en temas ambientales? ",
        "helptext1": null,
        "helptext2": null,
        "validator": (answer) => { return optionsEnviormentalKnowledge.includes(answer) },
        "type": 'radio',
        "options": optionsEnviormentalKnowledge,
        "optionsLabel": optionsEnviormentalKnowledge
    },
    {
        "id": 'knowCarbonFootprint',
        "animation": Personal,
        "question": "¿Alguna vez escuchaste hablar de la Huella de carbono?",
        "helptext1": null,
        "helptext2": null,
        "validator": (answer) => { return yesNoOptions.includes(answer) },
        "type": 'radio',
        "options": yesNoOptions,
        "optionsLabel": yesNoOptions
    },
    {
        "id": 'calculateCarbonFootprint',
        "animation": Personal,
        "question": "¿Alguna vez mediste tu Huella de carbono?",
        "helptext1": null,
        "helptext2": null,
        "validator": (answer) => { return yesNoOptions.includes(answer) },
        "type": 'radio',
        "options": yesNoOptions,
        "optionsLabel": yesNoOptions
    }
]
