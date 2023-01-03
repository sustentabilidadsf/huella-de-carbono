import React from 'react';

import ODS01 from "../../assets/img/ODS/ODS01.jpg";
import ODS02 from "../../assets/img/ODS/ODS02.jpg";
import ODS03 from "../../assets/img/ODS/ODS03.jpg";
import ODS04 from "../../assets/img/ODS/ODS04.jpg";
import ODS05 from "../../assets/img/ODS/ODS05.jpg";
import ODS06 from "../../assets/img/ODS/ODS06.jpg";
import ODS07 from "../../assets/img/ODS/ODS07.jpg";
import ODS08 from "../../assets/img/ODS/ODS08.jpg";
import ODS09 from "../../assets/img/ODS/ODS09.jpg";
import ODS10 from "../../assets/img/ODS/ODS10.jpg";
import ODS11 from "../../assets/img/ODS/ODS11.jpg";
import ODS12 from "../../assets/img/ODS/ODS12.jpg";
import ODS13 from "../../assets/img/ODS/ODS13.jpg";
import ODS14 from "../../assets/img/ODS/ODS14.jpg";
import ODS15 from "../../assets/img/ODS/ODS15.jpg";
import ODS16 from "../../assets/img/ODS/ODS16.jpg";
import ODS17 from "../../assets/img/ODS/ODS17.jpg";

import Tucuman from 'assets/img/compensar1.svg';
import Misiones from 'assets/img/compensar2.svg';
import EnergiaRenovable from 'assets/img/compensar3.svg';

import SeamosBosques from "../../assets/img/seamos-bosques.png";
import BancoDeBosques from "../../assets/img/banco-de-bosques.png";

const odsInfo = {
    "ods1": {link: 'https://www.un.org/sustainabledevelopment/es/poverty/', image: ODS01},
    "ods2": {link: 'https://www.un.org/sustainabledevelopment/es/hunger/', image: ODS02},
    "ods3": {link: 'https://www.un.org/sustainabledevelopment/es/health/', image: ODS03},
    "ods4": {link: 'https://www.un.org/sustainabledevelopment/es/education/', image: ODS04},
    "ods5": {link: 'https://www.un.org/sustainabledevelopment/es/gender-equality/', image: ODS05},
    "ods6": {link: 'https://www.un.org/sustainabledevelopment/es/water-and-sanitation/', image: ODS06},
    "ods7": {link: 'https://www.un.org/sustainabledevelopment/es/energy/', image: ODS07},
    "ods8": {link: 'https://www.un.org/sustainabledevelopment/es/economic-growth/', image: ODS08},
    "ods9": {link: 'https://www.un.org/sustainabledevelopment/es/infrastructure/', image: ODS09},
    "ods10": {link: 'https://www.un.org/sustainabledevelopment/es/inequality/', image: ODS10},
    "ods11": {link: 'https://www.un.org/sustainabledevelopment/es/cities/', image: ODS11},
    "ods12": {link: 'https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/', image: ODS12},
    "ods13": {link: 'https://www.un.org/sustainabledevelopment/es/climate-change-2/', image: ODS13},
    "ods14": {link: 'https://www.un.org/sustainabledevelopment/es/oceans/', image: ODS14},
    "ods15": {link: 'https://www.un.org/sustainabledevelopment/es/biodiversity/', image: ODS15},
    "ods16": {link: 'https://www.un.org/sustainabledevelopment/es/peace-justice/', image: ODS16},
    "ods17": {link: 'https://www.un.org/sustainabledevelopment/es/globalpartnerships/', image: ODS17},
}

export default {
    nativeForestTucuman: {
        odssReached: [odsInfo.ods8, odsInfo.ods13, odsInfo.ods15, odsInfo.ods17],
        enabled: true,
        pricePerTon: 549.78,
        organizationLogo: SeamosBosques,
        description: "Los árboles adquiridos y plantados serán georreferenciados y cargados en un mapa interactivo. Además, en el mapa mostramos la biodiversidad del ecosistema a través de videos de cámaras trampas para dar a conocer la vida dentro del bosque. Especies a plantar: Tipa, Lapacho, Pacará, Cedro Rosado, Tarco y Cebil.",
        smallDescription: "Compensá restaurando bosques nativos mediante la adquisición de árboles a plantarse en el ecosistema de las Yungas en la provincia de Tucumán.",
        image: Tucuman
    },
    nativeTreesMisiones: {
        odssReached: [odsInfo.ods1, odsInfo.ods2, odsInfo.ods3, odsInfo.ods4, odsInfo.ods6, odsInfo.ods7, odsInfo.ods8,
            odsInfo.ods13, odsInfo.ods17],
        enabled: true,
        pricePerTon: 654,
        organizationLogo: BancoDeBosques,
        description: <>Con tu donación se adquieren hectáreas de bosques nativos en la provincia de Misiones a fin de protegerlos de la deforestación. Protegerlos de su desmonte significa evitar que miles de toneladas de CO<sub>2</sub> sean liberadas a la atmósfera.</>,
        smallDescription: "Compensá promoviendo la conservación de bosques nativos (deforestación evitada) en Misiones.",
        image: Misiones
    }
    // renewableEnergy: {
    //     odssReached: [odsInfo.ods8, odsInfo.ods13, odsInfo.ods15, odsInfo.ods17],
    //     enabled: false,
    //     pricePerTon: 100,
    //     description: "Los árboles adquiridos y plantados serán georreferenciados y cargados en un mapa interactivo. Además, en el mapa mostramos la biodiversidad del ecosistema a través de videos de cámaras trampas para dar a conocer la vida dentro del bosque. Especies a plantar: Tipa, Lapacho, Pacará, Cedro Rosado, Tarco y Cebil.",
    //     smallDescription: "Compensá apoyando proyectos de energía renovable en todo el país.",
    //     image: EnergiaRenovable
    // }
}
