const {AdvancedCarbonFootprintCalculator} = require("../advanced");

test("Caculates transport emission for advanced calculator", () => {
    const data = {
        "kilometersTraveledByCar": 500,
        "averagePersonPerCar": 1,
        "carEfficiency": 8,
        "carFuelType": 'Nafta',
        "kilometersTraveledByTaxi": 100,
        "kilometersTraveledByMotorcycle": 0,
        "kilometersTraveledByBus": 0,
        "kilometersTraveledBySubway": 0,
        "kilometersTraveledByLongDistanceBus": 1000,
        "kilometersTraveledByPlane": 20000,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateTransportEmission().toFixed(3))).toBe(2.789);
});

test("Caculates feeding emission for advanced calculator", () => {
    const data = {
        "meatConsumption": 6
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateFeedingEmission().toFixed(3))).toBe(2.246);
});

test("Caculates waste emission for advanced calculator", () => {
    const data = {
        "peopleInHome": 1,
        "bagSize": "50x70",
        "numberOfBagsPerWeek": 2,
        "recycles": true,
        "composts": false,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateWasteEmission().toFixed(3))).toBe(0.099);
});

test("Caculates consumption emission for advanced calculator", () => {
    const data = {
        "internetUse": 5,
        "jeansBought": 4,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateConsumptionEmissions().toFixed(3))).toBe(0.135);
});

test("Caculates lifestyle emission for advanced calculator", () => {
    const data = {
        "peopleInHome": 1,
        "bagSize": "50x70",
        "numberOfBagsPerWeek": 2,
        "recycles": true,
        "composts": false,
        "internetUse": 5,
        "jeansBought": 4,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateLifestyleEmissions().toFixed(3))).toBe(0.234);
});

test("Caculates lifestyle emission for advanced calculator", () => {
    const data = {
        "peopleInHome": 1,
        "bagSize": "40x50",
        "numberOfBagsPerWeek": 2,
        "recycles": true,
        "composts": false,
        "internetUse": 0,
        "jeansBought": 0,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateLifestyleEmissions().toFixed(3))).toBe(0.059);
});

test("Caculates services emission for advanced calculator", () => {
    const data = {
        "peopleInHome": 1,
        "electricConsumption": 500,
        "gasConsumption": 100,
        "gasCarafeConsumption": 0,
        "waterConsumption": 40,
    }
    let advancedCalculator = new AdvancedCarbonFootprintCalculator(data);
    expect(parseFloat(advancedCalculator.calculateServicesEmission().toFixed(3))).toBe(2.217);
});