const express = require('express')
const isAuthenticated = require('../middlewares/isAuthenticated')
const Question = require('../models/question')

const router = express.Router()

router.get('/status', (req, res) => {
  res.send(req.session.username)
})

router.get('/questions', async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (e) {
    next(new Error('an error occured while fetching the questions'))
  }
})

router.post('/questions/add', isAuthenticated, async (req, res, next) => {
  const { questionText } = req.body
  const author = req.session.username
  try {
    await Question.create({ questionText, answer: '', author })
    res.send('new question posted successfully')
  } catch (e) {
    next(new Error('error while creating post'))
  }
})

router.post('/questions/answer', isAuthenticated, async (req, res, next) => {
  const { _id, answer } = req.body
  try {
    if (answer === '' || answer === undefined) {
      throw new Error('answer cannot be empty')
    }
    await Question.updateOne({ _id }, { answer })
    res.send('question answered successfully')
  } catch (e) {
    next(new Error('error while answering post'))
  }
})

router.delete('/questions/delete', isAuthenticated, async (req, res, next) => {
  const { _id, author } = req.body
  try {
    if (author !== req.session.username) {
      throw new Error('cannot delete post if you are not the author')
    }
    await Question.deleteOne({ _id })
    res.send('question deleted successfully')
  } catch (e) {
    next(new Error('error while deleting post'))
  }
})

module.exports = router
