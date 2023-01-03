export class LocalStorage {
    getItem(itemName) {
        if (this._getItemFromLocalStorage(itemName) === null) {
            return null
        } else {
            return JSON.parse(this._getItemFromLocalStorage(itemName))
        }
    }

    setItem(itemName, itemValue) {
        localStorage.setItem(itemName, JSON.stringify(itemValue))
    }


    _getItemFromLocalStorage(itemName) {
        return localStorage.getItem(itemName)
    }
}
