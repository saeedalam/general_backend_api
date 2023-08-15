const db = require('../db');

async function deleteDocument(req, res) {
    const collectionName = req.params.collection;
    const documentId = req.params.id;

    const deletedDocument = await db.deleteDocument(collectionName, documentId);

    if (deletedDocument) {
        res.json({ message: 'Document deleted successfully' });
    } else {
        res.status(404).json({ message: 'Document not found' });
    }
}


module.exports = deleteDocument;
