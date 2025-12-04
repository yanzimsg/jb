/*
  修改返回内容：
  1. 时间戳 1764822120000 → 1765166349000
  2. "stock":0 → "stock":10
*/

let body = $response.body;

try {
  body = body
    .replace(/1764822120000/g, "1765166349000")
    .replace(/"stock":\s*0/g, '"stock":10');
} catch (err) {
  console.log("网易云秒杀脚本替换失败: " + err);
}

$done({ body });
