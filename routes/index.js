const express = require('express');
const createDocument = require('../handlers/create');
const getDocuments = require('../handlers/get');
const updateDocument = require('../handlers/update');
const deleteDocument = require('../handlers/delete');

const router = express.Router();

router.post('/:collection', createDocument); // create / createMany
router.get('/:collection', getDocuments); // get / getAll / filters / limit / offset
router.put('/:collection/:id', updateDocument); // update updateMany
router.delete('/:collection/:id', deleteDocument); // delete / deleteMany

module.exports = router;
