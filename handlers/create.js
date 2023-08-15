// handlers/create.js

const db = require('../db');

async function createDocument(req, res) {
    const collectionName = req.params.collection;
    const data = req.body;

    try {
        const collection = db.getCollection(collectionName);

        // Insert the document into the collection
        await collection.insertOne(data);

        res.status(201).json({ message: 'Document created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

module.exports = createDocument;


module.exports = createDocument;
