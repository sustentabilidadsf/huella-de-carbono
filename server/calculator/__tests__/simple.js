const {SimpleCarbonFootprintCalculator} = require("../simple");

test("Caculates emissions for public transport for simple calculator", () => {
    const data = {
        "kilometersTraveledByCar": 0,
        "kilometersTraveledByMotorcycle": 0,
        "kilometersTraveledByPublicTransport": 1000,
        "meatConsumption": 0,
        "electricConsumption": 0,
        "peopleInHome": 1,
    }
    let simpleCalculator = new SimpleCarbonFootprintCalculator(data);
    expect(simpleCalculator.getResult().total).toBe(0.59);
});