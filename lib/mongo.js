var debug = require('debug')
const MongoClient = require('mongodb').MongoClient

function Mongo(opts){
    this.opts = opts
    debug('Mongodb gets ready.')
}


Mongo.prototype.saving = function (docs) {
    var self = this
    console.log('Inserting Demo records is Starting...')
    // make client connect to mongo service

    const insertDoc = function (db, data) {
        // Get the documents collection
        if (self.opts.methodology === 'vertical')
            var collectionName = self.opts.collectionName
        else
            var collectionName = data.realm

        const collection = db.collection(collectionName)
        //console.log(db)
        // Insert some documents
        try {
            collection.insertOne(data)
        } catch (e) {
            debug(e)
        }
    }

    
    MongoClient.connect(
        self.opts.url,
        function (err, client) {
            if (err) throw err
            const db = client.db()

            for (i = 0; i < docs.length; i++) {
                // insert multiple documents to 'users' collection using insertOne
                console.log('client ID: ' + docs[i].clientId.toString() + ' was inserted in realm: ' + docs[i].realm.toString())
                insertDoc(db, docs[i])
            }
            // close the connection to db when you are done with it
            client.close()
        })
    console.log('Inserting Random Demo Records Finished.')
}


module.exports = Mongo