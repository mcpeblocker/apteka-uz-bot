const { Scenes: { WizardScene } } = require('telegraf');
const { match } = require('telegraf-i18n');
const { commentKeyboard, cancelKeyboard } = require('../utils/keyboards');

const commentScene = new WizardScene(
    'comment',
    (ctx) => {
        let keyboard = commentKeyboard(ctx);
        ctx.replyWithHTML(ctx.i18n.t('comment.welcome'), keyboard);
        return ctx.wizard.next();
    },
    (ctx) => {
        if (!ctx.message.contact) {
            return ctx.reply(ctx.i18n.t('comment.phone'));
        }
        console.log(ctx.message.contact);
        let keyboard = cancelKeyboard(ctx);
        ctx.replyWithHTML(ctx.i18n.t('comment.input'), keyboard);
        return ctx.wizard.next();
    },
    (ctx) => {
        if (!ctx.message.text || ctx.message.text.length > 256) {
            return ctx.reply(ctx.i18n.t('comment.text'));
        }
        console.log(ctx.message.text);
        ctx.reply(ctx.i18n.t('comment.sent'));
        ctx.scene.enter('start');
    }
);

commentScene.hears(match('common.keyboard.cancel'), ctx => ctx.scene.enter('start'));

module.exports = commentScene;