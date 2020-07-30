const { createLogger, format, transports } = require('winston')
require('winston-daily-rotate-file')

const file = new transports.DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  utc: true,
  dirname: process.env.LOG_DIR || 'logs',
  filename: 'application-%DATE%.log',
  zippedArchive: true,
  maxSize: process.env.LOG_MAX_SIZE || '10m',
  maxFiles: process.env.LOG_DURATION || '7d',
  format: format.combine(format.timestamp(), format.json({ stable: true }))
})

const console = new transports.Console({
  format: format.combine(format.colorize(), format.simple())
})

const logger = createLogger({ level: 'info' })

logger.add(file)
if (process.env.NODE_ENV === 'dev') logger.add(console)

module.exports = logger
