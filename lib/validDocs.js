var pbkdf2 = require('./crypto')

var yesterday = new Date()
var today = new Date()
var tomorrow = new Date()
var nextMonth = new Date()
tomorrow.setDate(today.getDate() + 1)
yesterday.setDate(today.getDate() - 1)
nextMonth.setDate(today.getDate() + 30)

module.exports = function validDocs(opts) {
    return [
        {
            ver: '1.0',
            realm: 'mahdi',
            clientName: 'Hall Temperature',
            clientId: '0050bdee-dd8b-43a3-8602-a10f1d0e2659',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'daniel/home/hall/lamp', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/+', action: 'allow', type: 'r' },
                    ]
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                        { topic: 'hussein/garden/147No/temperature', action: 'allow', type: 'rw' },
                        { topic: 'hasan/door/lock', action: 'allow', type: 'r' },
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'yaAli', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'ali/office/server/+', action: 'allow', type: 'rw' },
                        { topic: 'hussein/hello', action: 'allow', type: 'r' },
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                    ]
                }
            ]
        },
        {
            ver: '1.0',
            realm: 'mohammad',
            clientName: 'Garden controller',
            clientId: '0186c5f8-0aad-4912-b5f2-d93ae4ef1f78',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'daniel/home/hall/lamp', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/+', action: 'allow', type: 'r' },
                    ]
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                        { topic: 'hussein/garden/147No/temperature', action: 'allow', type: 'rw' },
                        { topic: 'hasan/door/lock', action: 'allow', type: 'r' },
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'yaAli', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'ali/office/server/+', action: 'allow', type: 'rw' },
                        { topic: 'mohammad/#', action: 'allow', type: 'r' },
                        { topic: 'mahdi/+', action: 'allow', type: 'rw' },
                    ]
                }
            ]
        },
        {
            ver: '1.0',
            realm: 'ali',
            clientName: 'Hall Temperature',
            clientId: '0050bdee-dd8b-43a3-8602-a10f1d0e2659',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('amiralmomenin', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/#', action: 'allow', type: 'r' },
                    ],
                    keepAlive: 20,
                    limitW: 50,  //50kb is allowable for writting packet data in every publish
                    limitMPM: 3 // 3 messages per minute can write
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni', opts), startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'ali/#', action: 'allow', type: 'rw' },
                        { topic: 'mohammad/garden/147No/temperature', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/door/lock', action: 'allow', type: 'r' },
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'yaAli', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'ali/office/server/+', action: 'allow', type: 'rw' },
                        { topic: 'mohammad/hello', action: 'allow', type: 'r' },
                        { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                    ]
                }
            ]
        }
    ]
}