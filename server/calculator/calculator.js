const {AdvancedCarbonFootprintCalculator} = require("./advanced");
const {SimpleCarbonFootprintCalculator} = require("./simple");

class Calculator {
    calculateFootprint(data, type) {
        if (type === 'simple') {
            return this._calculateSimpleFootprint(data);
        }
        return this._calculateAdvanceFootprint(data);
    }

    _calculateSimpleFootprint(data) {
        return new SimpleCarbonFootprintCalculator(data).getResult();

    }

    _calculateAdvanceFootprint(data) {
        return new AdvancedCarbonFootprintCalculator(data).getResult();
    }
}

module.exports = { Calculator }