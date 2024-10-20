// [rewrite_local]
// ^https:\/\/2024blueutc\.pepsi\.com\.cn\/person\/getPrizeList\.do\?type=GGL&pageNum=1 url script-request-header get_token.js

// get_token.js
let url = $request.url;

// 提取 token 参数
let tokenMatch = url.match(/token=([^&]*)/);
let token = tokenMatch ? tokenMatch[1] : '未找到 token';

// URL 解码
let decodedToken = decodeURIComponent(token);

// 将解码后的 token 放入剪贴板
$clipboard = decodedToken;

// 发送通知
$notify('百事TOKEN获取成功', '获取到的token:', "百事串码+" + decodedToken +"\n");

$done({});
