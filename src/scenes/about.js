const { Scenes: { BaseScene } } = require('telegraf');
const { match } = require('telegraf-i18n');
const { aboutKeyboard } = require('../utils/keyboards');

const aboutScene = new BaseScene('about');

aboutScene.enter((ctx) => {
    let keyboard = aboutKeyboard(ctx);
    ctx.reply(ctx.i18n.t('about.welcome'), keyboard);
});

aboutScene.hears(match('about.keyboard.info'), (ctx) => {
    ctx.replyWithHTML(ctx.i18n.t('about.info'));
});

aboutScene.hears(match('about.keyboard.contact'), (ctx) => {
    ctx.replyWithHTML(ctx.i18n.t('about.contact'));
});

aboutScene.hears(match('common.keyboard.back'), (ctx) => {
    ctx.scene.enter('start');
});

module.exports = aboutScene;