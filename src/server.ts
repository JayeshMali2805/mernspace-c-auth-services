import { Config } from './config/index.js'
import logger from './config/logger.js'
import app from './app.js'

const startServer = () => {
  const PORT = Config.PORT
  try {
    app.listen(PORT, () => {
      logger.info('Server is listening on port', { port: PORT })
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
