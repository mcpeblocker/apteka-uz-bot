const { Telegraf, session, Markup } = require("telegraf");
const TelegrafI18n = require('telegraf-i18n');
const path = require('path');
const config = require('./config');
const stage = require('./scenes');
const startBot = require("./processes/startBot");
const auth = require("./middlewares/auth");

const i18n = new TelegrafI18n({
    defaultLanguage: 'uz',
    directory: path.resolve(__dirname, 'locales'),
    useSession: true
});

const bot = new Telegraf(config.token);

bot.use(session());
bot.use(i18n.middleware());
bot.use((ctx,next) => {
    if (ctx.chat.type === "private") {
        return next();
    }
    return;
});
bot.use(stage.middleware());
bot.use(auth);

bot.start((ctx) => ctx.scene.enter('start'));


startBot(bot);
