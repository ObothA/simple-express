const express = require('express');

const {
  getPersons,
  // createBootcamp,
  // getBootcamp,
  // updateBootcamp,
  // deleteBootcamp,
} = require('../controllers/persons');

const router = express.Router();

router.route('/').get(getPersons)
// .post(createBootcamp);

// router
//   .route('/:id')
//   .get(getBootcamp)
//   .put(updateBootcamp)
//   .delete(deleteBootcamp);

module.exports = router;
