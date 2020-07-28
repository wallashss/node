const { createLogger, format, transports } = require('winston')
require('winston-daily-rotate-file')

const file = new transports.DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  utc: true,
  dirname: 'logs',
  filename: 'application-%DATE%.log',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '7d',
  format: format.combine(format.timestamp(), format.json({ stable: true }))
})

const console = new transports.Console({
  format: format.combine(format.colorize(), format.simple())
})

const logger = createLogger({ level: 'info' })

logger.add(file)
if (process.env.NODE_ENV === 'dev') logger.add(console)

module.exports = logger
