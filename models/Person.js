const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name.'],
    trim: true,
    maxlength: [50, 'Name can not be longer than 50 characters.']
  },
  email: {
    type: String,
    required: [true, 'Please add an email.'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  country: {
    type: String,
    required: [true, 'Please add a country.'],
    trim: true,
    maxlength: [100, 'Name can not be longer than 100 characters.']
  },
});

module.exports = mongoose.model('Person', PersonSchema);