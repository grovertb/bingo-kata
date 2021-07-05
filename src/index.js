import express from 'express'
import routes from './routes'

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`[GroverTB] Server ready on port: ${port}`)
})

export default app
