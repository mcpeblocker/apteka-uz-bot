const { Scenes: { WizardScene } } = require('telegraf');
const { match } = require('telegraf-i18n');
const { subsearchKeyboard } = require('../utils/keyboards');

const subsearchScene = new WizardScene(
    'subsearch',
    (ctx) => {
        let { region } = ctx.session.search;
        let keyboard = subsearchKeyboard(ctx, region.id);
        ctx.reply(ctx.i18n.t('subsearch.welcome'), keyboard);
        return ctx.wizard.next();
    },
    (ctx) => {
        ctx.session.search.subregion = ctx.message.text;
        return ctx.scene.enter('searchcure');
    }
);

subsearchScene.hears(match('common.keyboard.back'), ctx => ctx.scene.enter('search'));
subsearchScene.hears(match('common.keyboard.home'), ctx => ctx.scene.enter('start'));
subsearchScene.hears(match('subsearch.keyboard.all'), ctx => {
    ctx.session.search.subregion = 'all';
    return ctx.scene.enter('searchcure');
});

module.exports = subsearchScene;