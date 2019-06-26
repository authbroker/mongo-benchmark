var fake = require('faker')

var yesterday = new Date()
var today = new Date()
var tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)
yesterday.setDate(today.getDate() - 1)


var validDocs = [
    {
        ver: '1.0',
        realm: fake.internet.userName,
        clientName: fake.name.findName,
        clientId: fake.random.uuid,
        adapters: [
            {
                type: 'mqtt',
                enabled: fake.random.boolean,
                secret: { type: 'pbkdf2', pwdhash: pbkdf2(fake.internet.password), startAfter: fake.date.past, expiredBefore: fake.date.future },
                topics: [
                    { topic: 'daniel/house/doorlock', action: 'allow', type: 'rw' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                    { topic: 'ali/garden/+', action: 'allow', type: 'r' },
                ],
                keepAlive: 20,
                limitW: 50,  //50kb is allowable for writting packet data in every publish
                limitMPM: 3 // 3 messages per minute can write
            },
            {
                type: 'http',
                enabled: true,
                secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni'), startAfter: yesterday, expiredBefore: tomorrow },
                topics: [
                    { topic: 'office/door/lock', action: 'allow', type: 'r' },
                    { topic: 'Hussein/log/#', action: 'allow', type: 'rw' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                ]
            },
            {
                type: 'coap',
                enabled: true,
                secret: { type: 'basic', pwdhash: 'yaali', startAfter: yesterday, expiredBefore: tomorrow },
                topics: [
                    { topic: 'hello', action: 'allow', type: 'rw' },
                    { topic: 'fatemeh/kitchen/temperature', action: 'allow', type: 'r' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                ]
            }

        ]
    },
    {
        ver: '1.0',
        realm: 'mohammad',
        clientName: 'garden controller',
        clientId: '165051f8-1615-4f88-aed1-883861312b39',
        adapters: [
            {
                type: 'mqtt',
                enabled: true,
                secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni'), startAfter: yesterday, expiredBefore: tomorrow },
                topics: [
                    { topic: 'daniel/house/doorlock', action: 'allow', type: 'rw' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                    { topic: 'ali/garden/+', action: 'allow', type: 'r' },
                ],
                keepAlive: 20,
                limitW: 50,  //50kb is allowable for writting packet data in every publish
                limitMPM: 3 // 3 messages per minute can write
            },
            {
                type: 'http',
                enabled: true,
                secret: { type: 'pbkdf2', pwdhash: pbkdf2('adrekni'), startAfter: yesterday, expiredBefore: tomorrow },
                topics: [
                    { topic: 'office/door/lock', action: 'allow', type: 'r' },
                    { topic: 'Hussein/log/#', action: 'allow', type: 'rw' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                ]
            },
            {
                type: 'coap',
                enabled: true,
                secret: { type: 'basic', pwdhash: 'yaali', startAfter: yesterday, expiredBefore: tomorrow },
                topics: [
                    { topic: 'hello', action: 'allow', type: 'rw' },
                    { topic: 'fatemeh/kitchen/temperature', action: 'allow', type: 'r' },
                    { topic: 'mahdi/#', action: 'allow', type: 'rw' },
                ]
            }

        ]
    }
]