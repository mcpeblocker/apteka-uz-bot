const { Scenes: { BaseScene } } = require('telegraf');
const { match } = require('telegraf-i18n');

const instructionsScene = new BaseScene('instructions');

instructionsScene.enter((ctx) => {
    ctx.reply('Instructions');
    ctx.scene.enter('start');
});

module.exports = instructionsScene;