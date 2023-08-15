// db.js
const { MongoClient, ObjectID, ObjectId } = require('mongodb');

class Database {
    constructor() {
        this.client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });
        this.dbName = process.env.DB_NAME;
    }

    async connect() {
        await this.client.connect();
        this.db = this.client.db(this.dbName);

        // Precreate collections if they don't exist
        const collectionsToPrecreate = ['bas_Events', 'bas_Users', /* ... */];
        for (const collectionName of collectionsToPrecreate) {
            await this.db.createCollection(collectionName);
        }
    }

    getCollection(collectionName) {
        return this.db.collection(collectionName);
    }

    async close() {
        await this.client.close();
    }

    async createDocument(collectionName, data) {
        const collection = this.getCollection(collectionName);
        const result = await collection.insertOne(data);
        return result.ops[0];
    }

    async getDocuments(collectionName) {
        const collection = this.getCollection(collectionName);
        const documents = await collection.find({}).toArray();
        return documents;
    }

    async updateDocument(collectionName, documentId, data) {
        const collection = this.getCollection(collectionName);
        const result = await collection.findOneAndUpdate(
            { _id: ObjectID(documentId) },
            { $set: data },
            { returnOriginal: false }
        );
        return result.value;
    }

    async deleteDocument(collectionName, documentId) {
        const collection = this.getCollection(collectionName);
        const result = await collection.findOneAndDelete({ _id: ObjectId(documentId) });
        return result.value;
    }
}

module.exports = new Database();
