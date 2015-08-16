var logger = require('./')

logger.debug('hello debug')
logger.info('hello info')
logger.warn('hello warn', { a: 'logger' })
logger.error('hello error')
