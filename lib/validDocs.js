
var yesterday = new Date()
var today = new Date()
var tomorrow = new Date()
var nextMonth = new Date()
tomorrow.setDate(today.getDate() + 1)
yesterday.setDate(today.getDate() - 1)
nextMonth.setDate(today.getDate() + 30)

module.exports = function validDocs() {
    return [
        {
            ver: '1.0',
            realm: 'mahdi',
            clientName: 'allowed topic',
            clientId: '0050bdee-dd8b-43a3-8602-a10f1d0e2659',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: 'Jesus Will Return with Imam Mahdi', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'daniel/home/hall/lamp', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/office/server/fan', action: 'allow', type: 'r' },
                        { topic: 'ali/garden', action: 'allow', type: 'r' }
                    ]
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: 'Jesus Will Return with Imam Mahdi', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'daniel/home/hall/lamp', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/office/server/fan', action: 'allow', type: 'r' },
                        { topic: 'ali/garden', action: 'allow', type: 'r' }
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'Jesus Will Return with Imam Mahdi', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'daniel/home/hall/lamp', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/office/server/fan', action: 'allow', type: 'r' },
                        { topic: 'ali/garden', action: 'allow', type: 'r' }
                    ]
                }
            ]
        },
        {
            ver: '1.0',
            realm: 'mohammad',
            clientName: 'wildcard topics',
            clientId: '0186c5f8-0aad-4912-b5f2-d93ae4ef1f78',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: 'Muhammad is the messenger of God', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/#', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/garden/+', action: 'allow', type: 'r' }
                    ]
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: 'Muhammad is the messenger of God', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/#', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/garden/+', action: 'allow', type: 'r' }
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'Muhammad is the messenger of God', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/#', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home/#', action: 'allow', type: 'rw' },
                        { topic: 'ali/garden/+', action: 'allow', type: 'r' }
                    ]
                }
            ]
        },
        {
            ver: '1.0',
            realm: 'ali',
            clientName: 'Social IoT',
            clientId: '0050bdee-dd8b-43a3-8602-a10f1d0e2659',
            adapters: [
                {
                    type: 'mqtt',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'amiralmomenin', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home', action: 'allow', type: 'rw' },
                        { topic: 'ali/#', action: 'allow', type: 'r' }
                    ],
                    keepAlive: 20,
                    limitW: 50,  //50kb is allowable for writting packet data in every publish
                    limitMPM: 3 // 3 messages per minute can write
                },
                {
                    type: 'http',
                    enabled: true,
                    secret: { type: 'pbkdf2', pwdhash: 'amiralmomenin', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home', action: 'allow', type: 'rw' },
                        { topic: 'ali/#', action: 'allow', type: 'r' }
                    ]
                },
                {
                    type: 'coap',
                    enabled: true,
                    secret: { type: 'basic', pwdhash: 'yaAli', startAfter: yesterday, expiredBefore: tomorrow },
                    topics: [
                        { topic: 'mohammad/home/hall/heater', action: 'allow', type: 'rw' },
                        { topic: 'mahdi/home', action: 'allow', type: 'rw' },
                        { topic: 'ali/#', action: 'allow', type: 'r' }
                    ]
                }
            ]
        }
    ]
}