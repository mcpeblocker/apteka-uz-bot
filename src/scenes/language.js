const { Scenes: { WizardScene } } = require('telegraf');
const { languageInlineKeyboard } = require('../utils/keyboards');

const languageScene = new WizardScene(
    'language',
    (ctx) => {
        const keyboard = languageInlineKeyboard();
        ctx.replyWithHTML(
            `🇺🇿 Tilni tanlang\n🇷🇺 Выберите язык\n🇺🇸 Select language`,
            keyboard
        );
        return ctx.wizard.next();
    },
    async (ctx) => {
        await ctx.deleteMessage();
        if(!ctx.callbackQuery) {
            return ctx.scene.reenter();
        }
        let lang = ctx.callbackQuery.data;
        if (!['uz','ru','en'].includes(lang)) {
            return ctx.scene.reenter();
        }
        ctx.session.language = lang;
        ctx.i18n.locale(lang);
        ctx.session.user = {
            id: ctx.from.id
        };
        return ctx.scene.enter('start');
    }
);

module.exports = languageScene;