const { Scenes: { BaseScene } } = require('telegraf');
const { match } = require('telegraf-i18n');
const { getRegions } = require('../services/locations');
const { searchKeyboard } = require('../utils/keyboards');

const searchScene = new BaseScene('search');

searchScene.enter((ctx) => {
    let keyboard = searchKeyboard(ctx);
    ctx.reply(ctx.i18n.t('search.welcome'), keyboard);
});

searchScene.on('location', (ctx) => {
    ctx.reply('Location is not available yet');
});

searchScene.hears(match('search.keyboard.country'), (ctx) => {
    ctx.session.search = ctx.session.search || { };
    ctx.session.search.region = 'all';
    return ctx.scene.enter('searchcure');
});

searchScene.hears(match('common.keyboard.back'), (ctx) => {
    return ctx.scene.enter('start');
});

searchScene.on('text', (ctx) => {
    let regions = getRegions();
    let region = regions.find(r => r.name === ctx.message.text);
    if (!region) {
        return ctx.scene.reenter();
    }
    ctx.session.search = ctx.session.search || { };
    ctx.session.search = { region };
    return ctx.scene.enter('subsearch');
})

module.exports = searchScene;