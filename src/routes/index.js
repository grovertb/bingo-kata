import express from 'express'

import bingo from './bingo'

const router = express.Router()
router.use('/bingo', bingo)

export default router
