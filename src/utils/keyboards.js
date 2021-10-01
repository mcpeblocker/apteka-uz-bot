const { Markup } = require("telegraf");
const locationsService = require('../services/locations');

const languageInlineKeyboard = () => {
    return Markup.inlineKeyboard([
        Markup.button.callback(`🇺🇿 O'zbek`, 'uz'),
        Markup.button.callback('🇷🇺 Русский', 'ru'),
        Markup.button.callback('🇺🇸 English', 'en')
    ]);
};

const mainKeyboard = (ctx) => {
    return Markup.keyboard([
        [Markup.button.text(ctx.i18n.t('main.keyboard.search'))],
        [Markup.button.text(ctx.i18n.t('main.keyboard.instructions'))],
        [
            Markup.button.text(ctx.i18n.t('main.keyboard.comment')),
            Markup.button.text(ctx.i18n.t('main.keyboard.about'))
        ],
        [Markup.button.text(ctx.i18n.t('main.keyboard.language'))]
    ]).resize();
};

const searchKeyboard = (ctx) => {
    const regions = locationsService.getRegions();
    let keyboard = [
        Markup.button.locationRequest(ctx.i18n.t('search.keyboard.location')),
        Markup.button.text(ctx.i18n.t('search.keyboard.country'))
    ];
    for (let region of regions) {
        keyboard.push(Markup.button.text(region.name));
    }
    keyboard.push(Markup.button.text(ctx.i18n.t('common.keyboard.back')));
    return Markup.keyboard(keyboard, {
        wrap: (btn, index, currentRow) => {
            if ([0,1,2,keyboard.length - 1].includes(index)) {
                return true;
            };
            if (index > 2 && index < keyboard.length - 1 && currentRow.length === 2) {
                return true;
            }
            return false;
        }
    });
};

const subsearchKeyboard = (ctx, regionId) => {
    const subregions = locationsService.getSubregions(regionId);
    let keyboard = [
        Markup.button.text(ctx.i18n.t('subsearch.keyboard.all'))
    ];
    for (let subregion of subregions) {
        keyboard.push(Markup.button.text(subregion.name));
    }
    keyboard.push(
        Markup.button.text(ctx.i18n.t('common.keyboard.back')),
        Markup.button.text(ctx.i18n.t('common.keyboard.home'))
    );
    return Markup.keyboard(keyboard, {
        wrap: (btn, index, currentRow) => {
            if (index === 1) {
                return true;
            }
            if (index > 1 && index < keyboard.length - 2 && currentRow.length === 2) {
                return true;
            }
            if (index === keyboard.length - 2) {
                return true;
            }
            return false;
        }
    })
};

const searchcureKeyboard = (ctx) => {
    return Markup.keyboard([[
        Markup.button.text(ctx.i18n.t('common.keyboard.back')),
        Markup.button.text(ctx.i18n.t('common.keyboard.home'))
    ]]).resize();
}

const aboutKeyboard = (ctx) => {
    return Markup.keyboard([
        Markup.button.text(ctx.i18n.t('about.keyboard.info')),
        Markup.button.text(ctx.i18n.t('about.keyboard.contact')),
        Markup.button.text(ctx.i18n.t('common.keyboard.back'))
    ]).resize();
};

const commentKeyboard = (ctx) => {
    return Markup.keyboard([
        Markup.button.contactRequest(ctx.i18n.t('comment.keyboard.phone')),
        Markup.button.text(ctx.i18n.t('common.keyboard.cancel'))
    ]).resize();
}

const cancelKeyboard = (ctx) => {
    return Markup.keyboard([
        Markup.button.text(ctx.i18n.t('common.keyboard.cancel'))
    ]).resize();
}

module.exports = {
    languageInlineKeyboard,
    mainKeyboard,
    searchKeyboard,
    subsearchKeyboard,
    searchcureKeyboard,
    aboutKeyboard,
    commentKeyboard,
    cancelKeyboard
}