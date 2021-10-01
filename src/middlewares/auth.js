module.exports = (ctx,next) => {
    if(ctx.session.user) {
        return next();
    };
    return ctx.scene.enter('language');
}