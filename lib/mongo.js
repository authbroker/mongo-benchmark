var debug = require('debug')('mongo')
var assert = require('assert')
const MongoClient = require('mongodb').MongoClient

function Mongo(opts) {
    this.opts = opts
    debug('Mongodb gets ready.')
}


Mongo.prototype.reading = function (doc, cb) {
    var self = this
    debug('Reading records is Starting...')
    // make client connect to mongo service

    const findDoc = function (db, data, callback) {
        // Get the documents collection
        debug(data)
        if (self.opts.methodology === 'vertical')
            var collectionName = self.opts.collectionName
        else
            var collectionName = data.realm

        const collection = db.collection(collectionName)
        collection.findOne(data, function (err, res) {
            //assert.equal(err, null)    
            if (err) throw err
            debug('reading Items:')
            debug(res)
            callback(res)
        })
    }

    // Use connect method to connect to the server
    MongoClient.connect(self.opts.url, { useNewUrlParser: true }, function (err, client) {
        assert.equal(null, err)
        console.log("Connected correctly to server")
        const db = client.db()
        findDoc(db, doc, function (findcb) {
            client.close()
            debug('Reading record finished.')
            cb(null, findcb)
        })
    })


}


Mongo.prototype.saving = function (docs, cb) {
    var self = this
    debug('Inserting Demo records is Starting...')
    // make client connect to mongo service

    const insertDoc = function (db, data, callback) {
        // Get the documents collection
        if (self.opts.methodology === 'vertical')
            var collectionName = self.opts.collectionName
        else
            var collectionName = data.realm

        const collection = db.collection(collectionName)
        // Insert some documents
        
        collection.insertMany(data, function (err, res) {
            if (err) throw err
            callback(null, res)
        })

    }

    MongoClient.connect(
        self.opts.url, { useNewUrlParser: true },
        function (err, client) {
            if (err) {
                throw err
            }
            const db = client.db()
            // insert multiple documents to 'users' collection using insertOne
                        
            insertDoc(db, docs, function (err, res) {
                // close the connection to db when you are done with it
                client.close()
                cb(null, res)
            })
        })
    console.log('Inserting Demo Records Finished.')
}


Mongo.prototype.dropCollection = function (collectionName, callback) {
    console.log('Becareful, this delete collecion')
    var self = this
    var url = self.opts.url
    MongoClient.connect(url, function (err, dbs) {
        if (err) throw err
        var dbo = dbs.db()
        dbo.dropCollection(collectionName, function (err, delOK) {
            if (err)
                throw err

            if (delOK)
                console.log("Collection deleted")
            dbs.close()
            callback(delOK)
        })
    })
}


module.exports = Mongo