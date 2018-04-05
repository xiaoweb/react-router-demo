const koa = require('koa');
const app = new koa();

app.use(async (ctx,next)=>{
    await next();
    ctx.body = '123';
});

app.use(async (ctx,next)=>{
    ctx.body = 321;
});

app.listen(3000);