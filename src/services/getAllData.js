const { Firestore } = require('@google-cloud/firestore');
const Credential = require('../config/service-account.json');

const firestoreDB = new Firestore({
    projectId: 'submissionmlgc-muhammadfadhil',
    credentials: Credential
});

async function fetchAllRecords() {
    const predictionsCollection = firestoreDB.collection('predictions');
    const records = await predictionsCollection.get();
    return records.docs;
}

module.exports = fetchAllRecords;