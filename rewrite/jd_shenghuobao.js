// 拿到完整原始响应json
let obj = JSON.parse($response.body);
// 定位到 skuDetailVosList 数组
const list = obj.rs?.serviceDetailVo?.skuDetailVosList;
if (Array.isArray(list)) {
  list.forEach(item => {
    // 只在skuStatus等于5的时候才修改
    if (item.skuStatus === 5) {
      item.skuStatus = 0;
      
    }
  })
}
// 把修改后的整个对象重新序列化成字符串返回
$response.body = JSON.stringify(obj);
