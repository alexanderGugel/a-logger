# a-logger [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A logger.

## Why?

I was frustrated with all the loggers out there. They do way too much. I want
some colors, a time and a message. Errors should be logged to `stderr`,
everything else goes to `stdout`. That's it. No magic. Just a logger.

## Install

Via [`npm`](https://www.npmjs.com/) do:

```
npm i a-logger --save
```

## Usage

```js
var logger = require('a-logger')

logger.debug('hello debug')
logger.info('hello info')
logger.warn('hello warn')
logger.error('hello error')
```
## See Also

- [bistre](https://github.com/hughsk/bistre)

## License

See [`LICENSE` file](LICENSE).
