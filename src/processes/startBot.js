const express = require('express');
const config = require('../config');

module.exports = (bot) => {
    if (config.nodeEnv === 'production' || config.nodeEnv === 'prod') {
        const secretPath = `/telegraf/${bot.secretPathComponent()}`;
        bot.telegram.setWebhook(`${config.host}${secretPath}`);
        const app = express();
        app.get('/', (req, res) => { res.send('Hello world') });
        app.use(bot.webhookCallback(secretPath));
        app.listen(config.port, () => {
            console.log('App is listening at port ' + config.port);
        })
    } else {
        bot.telegram.deleteWebhook()
            .then(() => {
                console.log('Webhook cleared');
                bot.launch()
                    .then(() => {
                        console.log(`@${bot.botInfo.username} started`);
                    })
                    .catch((err) => {
                        throw err;
                    });
            })
            .catch((err) => {
                console.error(`Can't clear webhook: ${err}`);
            })
    }
};