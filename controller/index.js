const mongodb = require('../db/connect');

const awesomeFunction = (req, res, next) => {
  res.json('Sarah Birch');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Super awesome person');
};

const getMongoData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { awesomeFunction, returnAnotherPerson, getMongoData };