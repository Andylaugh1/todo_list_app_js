const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs));
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then(() => {
        collection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      })
  })

  router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    collection
    .deleteOne({_id: ObjectID(taskId) })
    .then(() => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
  })

    return router;

};

module.exports = createRouter;
