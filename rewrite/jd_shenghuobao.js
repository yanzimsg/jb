// 京东权益 skuStatus 修改 同优酷文本替换风格
// $notify("京东权益重写执行");
let body = $response.body;
// 替换 skuStatus:5 → skuStatus:0，同时清空 skuStatusText
let modifiedBody = body
    .replace(/"skuStatus":5/g, '"skuStatus":0');
$notify(modifiedBody);
$done({body: modifiedBody});
