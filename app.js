const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello World";
});

app.listen(5000);
console.log("app started at port 5000...");
