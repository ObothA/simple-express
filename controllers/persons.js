const ErrorResponse = require('../utils/errorResponse');
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

/**
 * @description Get single person
 * @param {*} req
 * @param {*} res
 * *@route GET /api/v1/persons/:id
 * @access Public
 */
exports.getPerson = asyncHandler(async (req, res, next) => {
  const person = await Person.findById(req.params.id);

  if (!person) {
    return next(
      new ErrorResponse(`No person with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    message: 'Request Successful.',
    data: person
  });
});