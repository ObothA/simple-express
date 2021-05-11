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

/**
 * @description Add a  person
 * @param {*} req
 * @param {*} res
 * @route POST /api/v1/persons
 * @access Public
 */
exports.addPerson = asyncHandler(async (req, res) => {
  const person = await Person.create(req.body);

  res.status(200).json({
    message: 'Person Successfully added.',
    data: person
  });
});

/**
 * @description Update a person
 * @param {*} req
 * @param {*} res
 * @route PUT /api/v1/persons/:id
 * @access Public
 */
exports.updatePerson = asyncHandler(async (req, res, next) => {
  const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!person) {
    return next(
      new ErrorResponse(`Person not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    message: 'Person Successfully updated.',
    data: person
  });
});

/**
 * @description Delete bootcamp
 * @param {*} req
 * @param {*} res
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  // This method triggers our "pre" middleware
  bootcamp.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
