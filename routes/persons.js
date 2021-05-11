const express = require('express');

const {
  getPersons,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/persons');

const router = express.Router();

router.route('/').get(getPersons).post(addPerson);

router.route('/:id')
  .get(getPerson)
  .put(updatePerson)
  .delete(deletePerson);

module.exports = router;
