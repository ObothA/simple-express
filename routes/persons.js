const express = require('express');

const {
  getPersons,
  getPerson,
  // createBootcamp,
  // updateBootcamp,
  // deleteBootcamp,
} = require('../controllers/persons');

const router = express.Router();

router.route('/').get(getPersons)
// .post(createBootcamp);

router.route('/:id')
  .get(getPerson)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router;
