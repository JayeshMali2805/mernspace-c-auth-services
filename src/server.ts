import { log } from 'node:console'
import { Config } from './config/index.js'
import app from './app.js'

const startServer = () => {
  const port = Number(Config.PORT ?? 3000)
  app.listen(port, () => log(`Listening on port ${port}`))
}

startServer()
