// 京东权益 skuStatus 修改 同优酷文本替换风格

let body = $response.body;
// 替换 skuStatus:5 → skuStatus:0，同时清空 skuStatusText
let modifiedBody = body
//"exchangeQty":0
    .replace(/"exchangeQty":0/g, '"exchangeQty":231');
// $notify(modifiedBody);
$done({body: modifiedBody});
