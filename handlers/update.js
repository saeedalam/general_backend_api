const db = require('../db');

async function updateDocument(req, res) {
    const collectionName = req.params.collection;
    const documentId = req.params.id;
    const data = req.body;

    const updatedDocument = await db.updateDocument(collectionName, documentId, data);

    res.json(updatedDocument);
}


module.exports = updateDocument;
