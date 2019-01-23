var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	arr:[["images/1.jpg","小米8青春版 镜面渐变AI双摄 6GB+64GB 梦幻蓝 骁龙 全网通4G 双卡双待 全面屏","18万+条评价","小米京东自营旗舰店","￥1499"],["images/10.jpg","Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机 【Apple年货节，限","10万+条评价","小米京东自营旗舰店","￥2499"],["images/11.jpg","一加手机6T 8GB+128GB 墨岩黑 光感屏幕指纹 高通骁龙845 全面屏双摄游戏手机","11万+条评价","小米京东自营旗舰店","￥1229"],["images/12.jpg","3GB+32GB 幻夜黑 高清珍珠屏 AI长续航 全网通标配版 移动联通电信4G手机 【优","18万+条评价","小米京东自营旗舰店","￥3399"]]
  	
  	
  });
});

module.exports = router;
