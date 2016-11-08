import Koa from 'koa';
import Mock from 'mockjs';
import pathToRegexp from 'path-to-regexp';
import APIS from './api';


const app = new Koa();

app.use(async(ctx, next) => {
  const reqAPI = ctx.path;
  let mockConfig = null;
  APIS.forEach((api) => {
    const regexp = api.URL.includes(':') && pathToRegexp(api.URL);
    if (regexp && regexp.test(reqAPI)) {
      mockConfig = api[ctx.method];
      return;
    } else if (api.URL === reqAPI) {
      mockConfig = api[ctx.method];
      return;
    }
  });
  const responseData = Mock.mock(mockConfig || {
    success: false,
    error: `没有配置${reqAPI}, 请添加`,
    data: null,
  });
  ctx.body = responseData;
  await next();
});

app.listen(9999, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('📢 mockser 启动成功, 端口: 9999');
});
