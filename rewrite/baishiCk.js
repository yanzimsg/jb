// [rewrite_local]
// ^https:\/\/2024blueutc\.pepsi\.com\.cn\/person\/getPrizeList\.do\?type=GGL&pageNum=1 url script-response-body get_token.js

// get_token.js
let body = $response.body;
let url = $request.url;

// 提取 token 参数
let tokenMatch = url.match(/token=([^&]*)/);
let token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : '未找到 token';

// 发送通知
$notify('Token 提取', '获取到的 token:', token);

$done({ body });
