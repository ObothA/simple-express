const express = require('express');

const {
  getPersons,
  getPerson,
  addPerson,
  // updateBootcamp,
  // deleteBootcamp,
} = require('../controllers/persons');

const router = express.Router();

router.route('/').get(getPersons).post(addPerson);

router.route('/:id')
  .get(getPerson)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router;
