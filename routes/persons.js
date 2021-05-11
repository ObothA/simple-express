const express = require('express');

const {
  getPersons,
  getPerson,
  addPerson,
  updatePerson,
  // deleteBootcamp,
} = require('../controllers/persons');

const router = express.Router();

router.route('/').get(getPersons).post(addPerson);

router.route('/:id')
  .get(getPerson)
  .put(updatePerson)
//   .delete(deleteBootcamp);

module.exports = router;
