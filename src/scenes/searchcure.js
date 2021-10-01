const { Scenes: { WizardScene } } = require('telegraf');
const { match } = require('telegraf-i18n');
const { searchcureKeyboard } = require('../utils/keyboards');

const searchcureScene = new WizardScene(
    'searchcure',
    (ctx) => {
        const keyboard = searchcureKeyboard(ctx);
        ctx.replyWithHTML(ctx.i18n.t('searchcure.welcome'), keyboard);
        return ctx.wizard.next();
    },
    (ctx) => {
        console.log(ctx.message.text);
    }
);

searchcureScene.hears(match('common.keyboard.back'), ctx => ctx.scene.enter('subsearch'));
searchcureScene.hears(match('common.keyboard.home'), ctx => ctx.scene.enter('start'));

module.exports = searchcureScene;