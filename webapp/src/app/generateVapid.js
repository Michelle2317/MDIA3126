const webPush = require('web-push');
const fs = require('fs');

const vapidKeys = webPush.generateVAPIDKeys();

fs.writeFileSync('.env', keysToWrite, { flag: 'w' });
