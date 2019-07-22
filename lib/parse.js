var debug = require('debug')('mongo')
const parse = require('parse/node')

function Parse(opts) {
    this.opts = opts.parse
    debug('Mongodb gets ready.')
    parse.initialize(opts.parse.appId, opts.parse.javascriptKey, opts.parse.masterKey);
    //javascriptKey is required only if you have it on server.
    parse.serverURL = opts.parse.serverURL
}


Parse.prototype.reading = async function (data, cb) {
    var self = this
    debug('Reading records is Starting...')

    // Get the documents collection
    console.log(data)
    if (self.opts.methodology === 'vertical')
        var collectionName = self.opts.collectionName
    else
        var collectionName = data.realm

    const Realm = parse.Object.extend(collectionName)
    const query = new parse.Query(Realm)
    query.equalTo("realm", data.realm)
    query.equalTo("clientId", data.clientId)
    const results = await query.find()
    console.log("Successfully retrieved ")
    // Do something with the returned Parse.Object values
    var object = results[i]
    console.log(object.get('realm') + ' :-: ' + object.get('clientId'))
    cb(object)
}



Parse.prototype.saving = function (data, callback) {
    var self = this
    debug('Inserting Demo records is Starting...')
    // make client connect to mongo service
    if (self.opts.methodology === 'vertical')
        var collectionName = self.opts.collectionName
    else
        var collectionName = data.realm

    const Realm = parse.Object.extend(collectionName)
    const realm = new Realm
    realm.save(data)
        .then((realm) => {
            // The object was saved successfully.
            callback(realm)
        }, (error) => {
            // The save failed.
            // error is a Parse.Error with an error code and message.
            callback(error)
        })
}


module.exports = Parse