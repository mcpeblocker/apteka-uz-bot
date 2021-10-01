const { Scenes: { Stage } } = require('telegraf');

const stage = new Stage([
    require('./start'),
    require('./language'),
    require('./search'),
    require('./instructions'),
    require('./comment'),
    require('./about'),
    require('./subsearch'),
    require('./searchcure')
]);

module.exports = stage;