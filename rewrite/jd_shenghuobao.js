// // 京东权益 skuStatus 修改 同优酷文本替换风格
// // $notify("京东权益重写执行");
// let body = $response.body;
// // 替换 skuStatus:5 → skuStatus:0，同时清空 skuStatusText
// let modifiedBody = body
//     .replace(/"skuStatus":5/g, '"skuStatus":0');
// // $notify(modifiedBody);
// $done({body: modifiedBody});

let body = $response.body;
// 把 skuStatus 的任意数值统一改成 0
body = body.replace(/"skuStatus"\s*:\s*-?\d+/g, '"skuStatus":0');
$done({ body: body });
