// const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Person = require('../models/Person');

/**
 * @description Get all people / persons
 * @param {*} req
 * @param {*} res
 * @route GET /api/v1/persons
 * @access Public
 */

exports.getPersons = asyncHandler(async (req, res) => {
  const persons = await Person.find();

  res.status(200).json({
    message: 'Request Successful.',
    data: persons
  });
});