// TODO: En el formulario se muestran otras opciones. Habría que chequearlo
const emissionFactorByFuelType = {
    'GasOil': 2.7381947,
    'Nafta': 2.336101913,
    'GNC': 2.046354528,
    'Electricidad': 0,
    'No uso auto': 0
}

const emissionFactorByWasteType = {
    [[false, false]]: 0.879, // No recicla y no composta
    [[true, true]]: 0.01, // Recicla y composta
    [[true, false]]: 0.527, // Si recicla pero no composta
    [[false, true]]: 0.021 // No recicla pero si composta
}

const kilogramsOfWasteByBagSize = {
    '30x40': {
        [[false, false]]: 1.8, // No recicla y no composta
        [[true, true]]: 0.72, // Recicla y composta
        [[true, false]]: 1.2, // Si recicla pero no composta
        [[false, true]]: 1.08 // No recicla pero si composta
    },
    '40x50': {
        [[false, false]]: 3.24, // No recicla y no composta
        [[true, true]]: 1.3, // Recicla y composta
        [[true, false]]: 2.16, // Si recicla pero no composta
        [[false, true]]: 1.94 // No recicla pero si composta
    },
    '50x70': {
        [[false, false]]: 5.4, // No recicla y no composta
        [[true, true]]: 2.16, // Recicla y composta
        [[true, false]]: 3.6, // Si recicla pero no composta
        [[false, true]]: 3.24 // No recicla pero si composta
    }
}

const averageWeeksPerYear = 52.1429;

class AdvancedCarbonFootprintCalculator {
    constructor(data) {
        this._data = data;
    }

    getResult() {
        const transportEmission = parseFloat(this.calculateTransportEmission().toFixed(2));
        const feedingEmission = parseFloat(this.calculateFeedingEmission().toFixed(2));
        const servicesEmission = parseFloat(this.calculateServicesEmission().toFixed(2));
        const lifestyleEmission = parseFloat(this.calculateLifestyleEmissions().toFixed(2));

        const total = transportEmission + feedingEmission + servicesEmission + lifestyleEmission;
        return {
            'total': total,
            'transport': transportEmission,
            'nutrition': feedingEmission,
            'home': lifestyleEmission,
            'energy': servicesEmission
        }
    }

    calculateLifestyleEmissions() {
        const wasteEmission = this.calculateWasteEmission();
        const consumptionEmissions = this.calculateConsumptionEmissions();
        return wasteEmission + consumptionEmissions;
    }

    calculateTransportEmission() {
        const carEmission = this._calculateEmissionForCarUsage();
        const taxiEmission = this._calculateEmissionForTaxiUsage();
        const motorcycleEmission = this._calculateEmissionForMotorcycleUsage();
        const publicTransportEmission = this._calculateEmissionForPublicTransportUsage();

        return carEmission + taxiEmission + motorcycleEmission + publicTransportEmission;
    }

    calculateFeedingEmission() {
        const emissionFactor = 35.9;
        const meatConsumption = this._data['meatConsumption'];
        const averageKilogramsPerPlate = 0.2
        const consumptionOfMeatPerYear = meatConsumption * averageKilogramsPerPlate * averageWeeksPerYear;
        return this._emissionInTonsPerYear(consumptionOfMeatPerYear, emissionFactor)
    }

    calculateWasteEmission() {
        const recycles = this._data['recycles'];
        const composts = this._data['composts'];
        const bagSize = this._data['bagSize'];
        const peopleInHome = this._peopleInHome();
        const numberOfBagsPerYear = this._data['numberOfBagsPerWeek'] * averageWeeksPerYear;
        const kilogramsOfWastePerYear = kilogramsOfWasteByBagSize[bagSize][[recycles, composts]] * numberOfBagsPerYear;
        const kilogramsOfWastePerYearAndPerson = kilogramsOfWastePerYear / peopleInHome;
        const emissionFactor = emissionFactorByWasteType[[recycles, composts]];

        return this._emissionInTonsPerYear(kilogramsOfWastePerYearAndPerson, emissionFactor);
    }

    calculateServicesEmission() {
        const emissionForElectricConsumption = this._calculateEmissionForElectricConsumption();
        const emissionForGasConsumption = this._calculateEmissionForGasConsumption();
        const emissionForGasCarafeConsumption = this._calculateEmissionForGasCarafeConsumption();
        const emissionForWaterConsumption = this._calculateEmissionForWaterConsumption();

        return  emissionForElectricConsumption + emissionForGasConsumption + emissionForGasCarafeConsumption + emissionForWaterConsumption;
    }

    calculateConsumptionEmissions() {
        const jeansEmissions = this._calculateEmissionForJeansConsumption();
        const internetEmissions = this._calculateEmissionForInternetUsage();
        return jeansEmissions + internetEmissions;
    }

    _calculateEmissionForInternetUsage() {
        const anualInternetConsumption = this._data["internetUse"] * 365;
        const emissionFactor = 1 / 1000;
        return this._emissionInTonsPerYear(anualInternetConsumption, emissionFactor);
    }

    _calculateEmissionForJeansConsumption() {
        const jeansBought = this._data["jeansBought"];
        const emissionFactor = 33.4;
        return this._emissionInTonsPerYear(jeansBought, emissionFactor);
    }

    _calculateEmissionForElectricConsumption() {
        const emissionFactor = 0.2949000379;
        const electricConsumptionPerYear = this._data['electricConsumption'] * 12;
        const peopleInHome = this._peopleInHome();
        return this._emissionInTonsPerYear(electricConsumptionPerYear / peopleInHome, emissionFactor);
    }

    _calculateEmissionForGasConsumption() {
        const emissionFactor = 1.938014458;
        const gasConsumptionPerYear = this._data['gasConsumption'] * 12;
        const peopleInHome = this._peopleInHome();
        return this._emissionInTonsPerYear(gasConsumptionPerYear / peopleInHome, emissionFactor);
    }

    _calculateEmissionForGasCarafeConsumption() {
        const emissionFactor = 2.964;
        const gasConsumptionPerYear = this._data['gasCarafeConsumption'] * 12;
        const peopleInHome = this._peopleInHome();
        const consumptionPerYear = (gasConsumptionPerYear / peopleInHome) * 0.012 * 398.4063;
        return this._emissionInTonsPerYear(consumptionPerYear, emissionFactor);
    }

    _calculateEmissionForWaterConsumption() {
        const emissionFactor = 0.708;
        const waterConsumptionPerYear = this._data['waterConsumption'] * 12;
        const peopleInHome = this._peopleInHome();
        return this._emissionInTonsPerYear(waterConsumptionPerYear / peopleInHome, emissionFactor);
    }

    _calculateEmissionForCarUsage() {
        if (this._data['kilometersTraveledByCar'] === 0) {
            return 0;
        }
        const averagePersonPerCar = this._averagePersonPerCar();
        const vehicleEfficiency = this._data['carEfficiency'];
        const fuelType = this._data['carFuelType'];
        const traveledDistance = this._data['kilometersTraveledByCar'];
        const emissionFactor = emissionFactorByFuelType[fuelType];
        const consumptionPerYear = (traveledDistance * (vehicleEfficiency / 100) / averagePersonPerCar) * 12;
        return this._emissionInTonsPerYear(consumptionPerYear, emissionFactor);
    }

    _calculateEmissionForTaxiUsage() {
        const averagePersonPerCar = 1.5;
        const vehicleEfficiency = 8.424599832;
        const emissionFactor = emissionFactorByFuelType['Nafta'];
        const traveledDistance = this._data['kilometersTraveledByTaxi']
        const consumptionPerYear = (traveledDistance / vehicleEfficiency / averagePersonPerCar) * 12;
        return this._emissionInTonsPerYear(consumptionPerYear, emissionFactor);
    }

    _calculateEmissionForMotorcycleUsage() {
        //Old version
        // const averagePersonPerMotorcycle = 1.2;
        // const vehicleEfficiency = 16.12903226;
        // const emissionFactor = 0.062;
        // const traveledDistance = this._data['kilometersTraveledByMotorcycle'];
        // const consumptionPerYear = (traveledDistance / averagePersonPerMotorcycle / vehicleEfficiency) * 12;
        // return this._emissionInTonsPerYear(consumptionPerYear, emissionFactor);
        const emissionFactor = 0.062;
        const traveledDistance = this._data['kilometersTraveledByMotorcycle'];
        return this._emissionInTonsPerYear(traveledDistance * 12, emissionFactor);
    }

    _calculateEmissionForBusUsage() {
        const emissionFactor = 0.068;
        const traveledDistance = this._data['kilometersTraveledByBus'];
        return this._emissionInTonsPerYear(traveledDistance * 12, emissionFactor);
    }

    _calculateEmissionForSubwayUsage() {
        const emissionFactor = 0.03;
        const traveledDistance = this._data['kilometersTraveledBySubway'];
        return this._emissionInTonsPerYear(traveledDistance * 12, emissionFactor);
    }

    _calculateEmissionForLongDistanceBusUsage() {
        const emissionFactor = 0.066;
        const traveledDistance = this._data['kilometersTraveledByLongDistanceBus'];
        return this._emissionInTonsPerYear(traveledDistance, emissionFactor);
    }

    _calculateEmissionForPlaneUsage() {
        const emissionFactor = 0.097;
        const traveledDistance = this._data['kilometersTraveledByPlane'];
        return this._emissionInTonsPerYear(traveledDistance, emissionFactor);
    }

    _calculateEmissionForPublicTransportUsage() {
        const bus = this._calculateEmissionForBusUsage();
        const subway = this._calculateEmissionForSubwayUsage();
        const longDistanceBus = this._calculateEmissionForLongDistanceBusUsage();
        const plane = this._calculateEmissionForPlaneUsage();

        return bus + subway + longDistanceBus + plane;
    }

    _emissionInTonsPerYear(emission, emissionFactor) {
        return emission * emissionFactor / 1000;
    }

    _averagePersonPerCar() {
        return this._data["averagePersonPerCar"] + 1;
    }

    _peopleInHome() {
        return this._data["peopleInHome"] + 1;
    }
}

module.exports = { AdvancedCarbonFootprintCalculator }