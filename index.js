var debug = require('debug')
var mongo = require('./lib/mongo')
var validData = require('./lib/validDocs')

/*
// we create clients tables in auth collection and paraffin database
var url = process.env.DB_AUTH_URL || 'mongodb://localhost:27017'
var collectionName = DB_AUTH_COLLECTION || 'authBroker'
const methodology = process.env.METHODOLOGY || 'vertical'
*/


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