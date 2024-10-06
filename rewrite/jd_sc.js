// Quantumult X Rewrite Script
// [rewrite_local]
// ^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=queryMultiTabFloors url script-response-body jd_modify_response.js

// [mitm]
// hostname = api.m.jd.com

// jd_modify_response.js
let body = $response.body;

// 将返回的 "status":"8" 修改为 "status":"0"
body = body.replace(/"status":"8"/g, '"status":"0"');

$done({ body });
