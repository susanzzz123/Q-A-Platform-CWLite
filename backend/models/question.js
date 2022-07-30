const mongoose = require('mongoose')
const { Schema, model } = mongoose

const questionSchema = new Schema({
  questionText: { type: String, required: true },
  answer: String,
  author: String
})

const Question = model('Question', questionSchema)

module.exports = Question
