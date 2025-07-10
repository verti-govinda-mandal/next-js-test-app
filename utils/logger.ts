// lib/logger.ts
import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'

const logger = pino({
  level: isProd ? 'info' : 'debug',
  transport: isProd
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },
})

export default logger
