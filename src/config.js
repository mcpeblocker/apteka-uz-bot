(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod')
?
require('dotenv').config()
:
require('dotenv').config({ path: 'dev.env' })

module.exports = {
    token: process.env.BOT_TOKEN,
    nodeEnv: process.env.NODE_ENV,
    host: process.env.HOST,
    port: process.env.PORT,
    apiUrl: "http://apteka.softly.uz/"
}