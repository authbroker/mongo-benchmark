var debug = require('debug')
var mongo = require('./lib/mongo')
var validData = require('./lib/validDocs')


function mongoBenchmark(opts) {
    //this.opts = opts
    this.mongo = new mongo(opts.db)
}


mongoBenchmark.prototype.insertRandomData = function (recordsNo) {
    saving(docs)
}


mongoBenchmark.prototype.insertValidData = function () {
    this.mongo.saving(validData)
}



mongoBenchmark.prototype.getValidData = function (clientId) {
    for (i = 0; i < validData.length; i++)
        if (validData[i].clientId === clientId)
            return validData[i]
}



module.exports = mongoBenchmark