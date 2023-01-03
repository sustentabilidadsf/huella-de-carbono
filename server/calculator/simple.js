const averageConsumptionPerProvince = {
    'Buenos Aires': 144.212438,
    'CABA y GBA': 275.7027438,
    'Catamarca': 200.3224638,
    'Chaco': 274.8143343,
    'Chubut': 223.0430968,
    'Cordoba': 184.5330403,
    'Corrientes': 193.9576989,
    'Entre Ríos': 213.159196,
    'Formosa': 288.2975205,
    'Jujuy': 187.1883442,
    'La Pampa': 179.5185487,
    'La Rioja': 311.4994635,
    'Mendoza': 227.1240453,
    'Misiones': 215.7429965,
    'Neuquén': 208.1389801,
    'Río Negro': 183.2471238,
    'Salta': 220.020321,
    'San Juan': 301.3347483,
    'San Luis': 235.4673348,
    'Santa Cruz': 207.6057915,
    'Santa Fé': 188.8483393,
    'Santiago del Estero': 229.3332626,
    'Tierra del Fuego': 262.7984044,
    'Tucumán': 217.3107709
}

const averageWeeksPerYear = 52.1429;

class SimpleCarbonFootprintCalculator {
    constructor(data) {
        this._data = data;
    }

    getResult() {
        const transportEmission = this.calculateTransportEmission();
        const feedingEmission = this.calculateFeedingEmission();
        const servicesEmission = this.calculateServicesEmission();

        console.log(transportEmission);
        console.log(feedingEmission);
        console.log(servicesEmission);

        const total = transportEmission + feedingEmission + servicesEmission;

        return {
            'total': parseFloat(total.toFixed(2)),
        }
    }

    calculateTransportEmission() {
        const carEmission = this._calculateEmissionForCarUsage();
        const motorcycleEmission = this._calculateEmissionForMotorcycleUsage();
        const publicTransportEmission = this._calculateEmissionForPublicTransportUsage();

        return carEmission + motorcycleEmission + publicTransportEmission;
    }

    calculateFeedingEmission() {
        const emissionFactor = 35.9;
        const meatConsumption = this._data['meatConsumption'];
        const averageKilogramsPerPlate = 0.2
        const consumptionOfMeatPerYear = meatConsumption * averageKilogramsPerPlate * averageWeeksPerYear;
        return this._emissionInTonsPerYear(consumptionOfMeatPerYear, emissionFactor)
    }

    calculateServicesEmission() {
        let electricConsumption = 0;
        if (this._data['electricConsumption'] === "") {
            const consumptionArea = this._data["consumptionArea"];
            electricConsumption = averageConsumptionPerProvince[consumptionArea];
        } else {
            electricConsumption = this._data['electricConsumption'] * 12;
        }
        const peopleInHome = this._peopleInHome();
        const emissionFactor = 0.2949000379;
        return this._emissionInTonsPerYear(electricConsumption / peopleInHome, emissionFactor);
    }

    _calculateEmissionForCarUsage() {
        const averagePersonPerCar = 1.5;
        const vehicleEfficiency = 8.424599832;
        const emissionFactor = 2.336101913;
        const traveledDistance = this._data['kilometersTraveledByCar'];
        return this._emissionInTonsPerYear(traveledDistance / averagePersonPerCar / vehicleEfficiency * 12,
            emissionFactor);
    }

    _calculateEmissionForMotorcycleUsage() {
        // Old version
        // const averagePersonPerMotorcycle = 1.2;
        // const vehicleEfficiency = 16.12903226;
        // const emissionFactor = 0.062;
        // const traveledDistance = this._data['kilometersTraveledByMotorcycle'];
        // return (traveledDistance / averagePersonPerMotorcycle / vehicleEfficiency * 12 * emissionFactor) / 1000;
        const emissionFactor = 0.062;
        const traveledDistance = this._data['kilometersTraveledByMotorcycle'];
        return this._emissionInTonsPerYear(traveledDistance * 12, emissionFactor);
    }

    _calculateEmissionForPublicTransportUsage() {
        const emissionFactor = 0.049;
        const traveledDistance = this._data['kilometersTraveledByPublicTransport'];
        return this._emissionInTonsPerYear(traveledDistance * 12, emissionFactor);
    }

    _emissionInTonsPerYear(emission, emissionFactor) {
        return emission * emissionFactor / 1000;
    }

    _peopleInHome() {
        return this._data['peopleInHome'] + 1;
    }
}

module.exports = { SimpleCarbonFootprintCalculator }