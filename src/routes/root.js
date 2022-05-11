import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling Root')
  res.send({ msg: 'Hello There Part 2' })
})

export default router
