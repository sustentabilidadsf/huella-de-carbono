import {isNumeric} from "../utils/isNumeric";
import iconoTransporte from "../assets/img/icono-transporte.svg";
import iconoAlimentacion from "../assets/img/icono-alimentacion.svg";
import iconoConsumo from "../assets/img/icono-energia.svg";
import iconoEstiloDeVida from "../assets/img/icono-hogar.svg";
import iconoPersonal from "../assets/img/icono-personal.svg";
import Reciclaje from "../assets/img/Reciclaje";
import Energia from "../assets/img/Energia";
import Personal from "../assets/img/Personal";
import Alimentacion from "../assets/img/Alimentacion";
import Transporte from "../assets/img/Transporte";
import {yesNoOptions, genderOptions, optionsEnviormentalKnowledge,
        fuelOptions, plasticBagsOptions} from "../utils/options";


export const separationMethodsOptions = [
    'Separo los reciclables (papel, cartón, metal, vidrio, plásticos)',
    'Hago compost',
    'Separo los reciclables y hago compost'
];

export default [
    {
        name: "Transporte",
        icon: iconoTransporte,
        questions: [
            {
                "id": "kilometersTraveledByCar",
                "animation": Transporte,
                "question": "¿Cuántos km hacés en auto por mes?",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina e incluí el uso de taxi / uber / cabify.",
                "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'averagePersonPerCar',
                "animation": Transporte,
                "question": "En promedio, ¿con cuántas personas viajás cada vez que usás tu auto?",
                "helptext1": "Considerá solo las actividades de rutina.",
                "helptext2": "Si no usás auto o no lo compartís, completá con 0",
                "type": 'text',
                "unit": "",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'carEfficiency',
                "animation": Transporte,
                "question": "Qué consumo tiene el motor de tu auto que usás?",
                "helptext1": "Ingresá el valor en litros/100km.",
                "helptext2": "Si no usás auto, completá con 0.",
                "type": 'text',
                "unit": "l/100km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'carFuelType',
                "animation": Transporte,
                "question": "¿Qué tipo de combustible utiliza tu auto?",
                "helptext1": "",
                "helptext2": "",
                "validator": (answer) => { return fuelOptions.includes(answer) },
                "type": 'radio',
                "options": fuelOptions,
                "optionsLabel": fuelOptions
            },
            {
                "id": 'kilometersTraveledByTaxi',
                "animation": Transporte,
                "question": "¿Cuántos km hacés en taxi / uber / cabify o  en auto compartido por mes? ",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
                "helptext2": "Si no usás taxi / uber / cabify, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": "kilometersTraveledByMotorcycle",
                "animation": Transporte,
                "question": "¿Cuántos km hacés en moto por mes?",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
                "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'kilometersTraveledByBus',
                "animation": Transporte,
                "question": "¿Cuántos km hacés en colectivo por mes?",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
                "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'kilometersTraveledBySubway',
                "animation": Transporte,
                "question": "¿Cuántos km hacés en subte o tren por mes?",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
                "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'kilometersTraveledByLongDistanceBus',
                "animation": Transporte,
                "question": "¿Cuántos km haces en micro de media o larga distancia por año? ",
                "helptext1": "Considerá en tu respuesta sólo las actividades de rutina.",
                "helptext2": "Si no usás este tipo de vehículo, completá con 0.",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            },
            {
                "id": 'kilometersTraveledByPlane',
                "animation": Transporte,
                "question": "¿Cuántos km haces en avión por año? ",
                "helptext1": "Considerá la actividad de tu último año",
                "helptext2": "Si no sabés la cantidad de km de alguno de tus viajes, podés chequearlo en https://es.distance.to/",
                "type": 'text',
                "unit": "km",
                "validator": (answer) => {
                    return answer !== "" && isNumeric(answer)
                }
            }
        ]
    },
    {
        name: "Alimentacion",
        icon: iconoAlimentacion,
        questions: [
            {
                "id": 'meatConsumption',
                "animation": Alimentacion,
                "question": "¿Cuántas veces por semana comés carne (roja o blanca?)",
                "helptext1": null,
                "helptext2": 'Si no comés carne, completa con 0.',
                "type": 'text',
                "unit": "",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            }
        ]
    },
    {
        name: "Estilo de vida",
        icon: iconoEstiloDeVida,
        questions: [
            {
                "id": 'peopleInHome',
                "animation": Reciclaje,
                "question": "¿Con cuántas personas vivís?",
                "helptext1": null,
                "helptext2": "Si vivís solo, completá con 0.",
                "type": 'text',
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
            {
                "id": 'bagSize',
                "animation": Reciclaje,
                "question": "¿Qué tamaño de bolsa de basura usás?",
                "helptext1": null,
                "helptext2": null,
                "validator": (answer) => { return Object.keys(plasticBagsOptions).includes(answer) },
                "type": 'radio',
                "options": Object.keys(plasticBagsOptions),
                "optionsLabel": Object.values(plasticBagsOptions),
            },
            {
                "id": 'numberOfBagsPerWeek',
                "animation": Reciclaje,
                "question": "¿Cuántas bolsas de basura generás por semana?",
                "helptext1": null,
                "helptext2": null,
                "type": 'text',
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
            {
                "id": 'doYouSeparate',
                "animation": Reciclaje,
                "question": "¿Separás los residuos?",
                "helptext1": null,
                "helptext2": null,
                "validator": (answer) => { return yesNoOptions.includes(answer) },
                "type": 'radio',
                "options": yesNoOptions,
                "optionsLabel": yesNoOptions

            },
            {
                "id": 'separationMethods',
                "animation": Reciclaje,
                "question": "¿Cómo separás los residuos?",
                "helptext1": null,
                "helptext2": null,
                "validator": (answer) => { return separationMethodsOptions.includes(answer) },
                "type": 'radio',
                "options": separationMethodsOptions,
                "optionsLabel": separationMethodsOptions,
                "onlyIf" : ['doYouSeparate', (value) => {return value === yesNoOptions[0]}]
            },
            {
                "id": 'internetUse',
                "animation": Reciclaje,
                "question": "¿Cuántas horas usás internet por día? ",
                "helptext1": "Considerá el uso de internet en el celular. ",
                "helptext2": 'Si no usás internet, completá con 0.',
                "type": 'text',
                "unit": "hs",
                "validator": (answer) => { return answer !== "" && isNumeric(answer) && answer <= 24}
            },
            {
                "id": 'jeansBought',
                "animation": Reciclaje,
                "question": "¿Cuántos jeans te compraste el último año?",
                "helptext1": "",
                "helptext2": 'Si no te compraste jeans, completá con 0. ',
                "type": 'text',
                "unit": "",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
        ]
    },
    {
        name: "Servicios",
        icon: iconoConsumo,
        questions: [
            {
                "id": 'electricConsumption',
                "animation": Energia,
                "question": "¿Cuántos kw/h de luz se consume por mes en tu casa? ",
                "helptext1": "¡Podés buscarlo en tu factura de luz! ",
                "helptext2": 'Si no usás electricidad, completá con 0.',
                "type": 'text',
                "unit": "",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
            {
                "id": 'gasConsumption',
                "animation": Energia,
                "question": "¿Cuántos m3 de gas se consumen por mes en tu casa?",
                "helptext1": "¡Podés buscarlo en tu factura de gas!",
                "helptext2": 'Si no usás gas, completá con 0. Si usás garrafa, contestá con 0 esta pregunta y respondé la siguiente.',
                "type": 'text',
                "unit": "m3",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
            {
                "id": 'gasCarafeConsumption',
                "animation": Energia,
                "question": "Si usás garrafa, ¿cuántas garrafas consumen al mes en tu hogar?",
                "helptext1": "Para tu respuesta considerá que cada garrafa es de 12 kg.",
                "helptext2": 'Si no usás garrafa, completá con 0. ',
                "type": 'text',
                "unit": "",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
            {
                "id": 'waterConsumption',
                "animation": Energia,
                "question": "¿Cúantos m3 de agua se consume por mes en tu casa?",
                "helptext1": "¡Podés buscarlo en tu factura de agua!",
                "helptext2": 'Si no usás agua corriente, completá con 0.',
                "type": 'text',
                "unit": "m3",
                "validator": (answer) => { return answer !== "" && isNumeric(answer)}
            },
        ]
    },
    {
        name: "Sobre vos",
        icon: iconoPersonal,
        questions: [
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
    }
]
