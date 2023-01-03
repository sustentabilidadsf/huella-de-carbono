export function isNumeric(aString) {
    if (typeof aString != "string") return false // we only process strings!
    return !isNaN(aString) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(aString)) // ...and ensure strings of whitespace fail
}
