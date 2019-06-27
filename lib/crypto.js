var debug = require('debug')
const crypto = require('crypto')

/*
const config = {
  iterations: 10,
  hashBytes: 64,
  digest: 'sha512',
  salt: 'salt'
}
*/

// Generate PBKDF2 hash
function pbkdf2(value, opts) {

  const {
    iterations,
    hashBytes,
    digest,
    salt
  } = opts

  key = crypto.pbkdf2Sync(value, salt, iterations, hashBytes, digest)
  debug('Hashed > ' + value + ' : ' + key.toString('base64'))
  return key.toString('base64')
}

module.exports = pbkdf2