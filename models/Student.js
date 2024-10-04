const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    enum: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Fifth Year'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  enrolled: {
    type: Boolean,
    default: true,
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
