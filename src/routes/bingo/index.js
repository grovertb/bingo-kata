import express from 'express'
import Bingo from '../../controller/Bingo'

const router = express.Router()

let bingo = new Bingo()

router.get('/init', (req, res) => {
  try {
    bingo = new Bingo()

    res.json({ success: true, message: 'Bingo Started' })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

router.get('/generate/card', (req, res) => {
  try {
    const data = bingo.generateCard()
    res.json({ data, success: true })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

router.get('/generate/number', (req, res) => {
  try {
    const data = bingo.generateNumber()
    res.json({ data, success: true })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

router.get('/cards', (req, res) => {
  try {
    res.json({ data: { cards: bingo.cards }, success: true })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

router.get('/validate/card/:cardId', (req, res) => {
  try {
    const { cardId } = req.params
    const data = bingo.validateCardById(cardId)
    res.json({ data, success: true })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

router.get('/validate/cards', (req, res) => {
  try {
    const data = bingo.validateCards()
    res.json({ data, success: true })
  } catch (err) {
    res.status(500)
    res.json({ err: err.message, success: false })
  }
})

export default router
