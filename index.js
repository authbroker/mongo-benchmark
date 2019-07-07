var debug = require('debug')
var pbkdf2 = require('./lib/crypto')
var mongo = require('./lib/mongo')
var validData = require('./lib/validDocs')

function mongoBenchmark(opts) {
    this.opts = opts
    this.mongo = new mongo(opts.db)
}

mongoBenchmark.prototype.insertRandomData = function (recordsNo) {
    //
}

mongoBenchmark.prototype.readData = function (clientId) {
    let data = this.mongo.reading(clientId)
    if (data.clientId) return data
    else throw Error('Not found.')
}

mongoBenchmark.prototype.insertValidData = function () {
    var beforeHash = this.validData()
    var afterHash = beforeHash
    for (i = 0; i < beforeHash.length; i++)
        for (j = 0; j < beforeHash[i].adapters.length; j++)
            if (afterHash[i].adapters[j].secret.type === 'pbkdf2')
                afterHash[i].adapters[j].secret.pwdhash = pbkdf2(beforeHash[i].adapters[j].secret.pwdhash, this.opts.salt)

    this.mongo.saving(afterHash)
}

mongoBenchmark.prototype.validData = function () {
    return validData()
}

mongoBenchmark.prototype.getValidData = function (clientId) {
    var data = validData()
    for (i = 0; i < data.length; i++)
        if (data[i].clientId === clientId)
            return data[i]
}

module.exports = mongoBenchmark