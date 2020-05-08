let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let indexData = require('./datas/index.json')
let indexCateModuleData = require('./datas/indexCateModule.json')
let cateNavData =require('./datas/cateNavDatas.json')
let cateListData =require('./datas/cateLists.json')


router.get('/getindexData', (ctx, next) => {
  ctx.body = indexData
  
});
router.get('/getindexCateModuleData', (ctx, next) => {
  ctx.body = indexCateModuleData
  
});
router.get('/getCateListData', (ctx, next) => {
  ctx.body = cateListData
  
});
router.get('/getcateNavData', (ctx, next) => {
  ctx.body = cateNavData
  
});

router.get('/test', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = '测试返回内容'
});




router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
