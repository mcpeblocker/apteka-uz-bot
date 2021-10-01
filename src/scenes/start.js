const { Scenes: { BaseScene } } = require('telegraf');
const { mainKeyboard } = require('../utils/keyboards');
const { match } = require('telegraf-i18n');

const startScene = new BaseScene('start');

startScene.enter((ctx) => {
    let keyboard = mainKeyboard(ctx);
    ctx.replyWithHTML(ctx.i18n.t('main.welcome'), keyboard);
});

startScene.hears(match('main.keyboard.search'), (ctx) => ctx.scene.enter('search'));
startScene.hears(match('main.keyboard.instructions'), (ctx) => ctx.scene.enter('instructions'));
startScene.hears(match('main.keyboard.comment'), (ctx) => ctx.scene.enter('comment'));
startScene.hears(match('main.keyboard.about'), (ctx) => ctx.scene.enter('about'));
startScene.hears(match('main.keyboard.language'), (ctx) => ctx.scene.enter('language'));

module.exports = startScene;