var debug = require('debug')
var mongo = require('./lib/mongo')
var validData = require('./lib/validDocs')

function mongoBenchmark(opts) {
    this.opts = opts
    this.mongo = new mongo(opts.db)
}

mongoBenchmark.prototype.insertRandomData = function (recordsNo) {
    saving(docs)
}

mongoBenchmark.prototype.insertValidData = function () {
    this.mongo.saving(validData(this.opts.salt))
}

mongoBenchmark.prototype.validData = function () {
    return validData(this.opts.salt)
}

mongoBenchmark.prototype.getValidData = function (clientId) {
    var data = validData(this.opts.salt)
    for (i = 0; i < data.length; i++)
        if (data[i].clientId === clientId)
            return data[i]
}

module.exports = mongoBenchmark