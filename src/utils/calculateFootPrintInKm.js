export function calculateFootPrintInKm(footprintInTons) {
    const co2ToKmFactor = 417 / 0.073
    return Math.round(footprintInTons * co2ToKmFactor)
}
