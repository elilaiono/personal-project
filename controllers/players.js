const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('Disc_Golf').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('Disc_Golf').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPlayer = async (req, res) => {
  const player = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    expLvl: req.body.expLvl,
    favCourse: req.body.favCourse,
    favDisc: req.body.favDisc,
    throwStyle: req.body.throwStyle,
    longestShot: req.body.longestShot
  };
  const response = await mongodb.getDb().db().collection('Disc_Golf').insertOne(player);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updatePlayer = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const player = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    expLvl: req.body.expLvl,
    favCourse: req.body.favCourse,
    favDisc: req.body.favDisc,
    throwStyle: req.body.throwStyle,
    longestShot: req.body.longestShot
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('Disc_Golf')
    .replaceOne({ _id: userId }, player);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deletePlayer = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('Disc_Golf').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createPlayer,
  updatePlayer,
  deletePlayer
};