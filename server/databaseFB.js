// Firebase conecction
const admin = require('firebase-admin');
const serviceAccount = require(`./${process.env.FIREBASE_CONFIGURATION_FILENAME}`);

let db;
let footprintCollection;
if(!process.env.DEVELOPMENT_MODE) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    db = admin.firestore();
    footprintCollection = db.collection('footprint');
}


class DatabaseFB {
    async saveFootprint(data, calculation) {
        var info = {
            'data': data,
            'footprint': calculation
        };
        await footprintCollection.doc().set(info);
    }

    async getResults() {
        let snapshot = await footprintCollection.get();
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = { DatabaseFB }
