const db = require('../db');

async function getDocuments(req, res) {
    const collectionName = req.params.collection;

    const collection = db.getCollection(collectionName);
    const documents = await collection.find({}).toArray();
    res.json(documents);
}


module.exports = getDocuments;
