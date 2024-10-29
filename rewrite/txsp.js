// 腾讯云包场显示可领取 qx重写
// $notify("test!!!");
let body = $response.body;
// $notify(body);

// 修改响应体中的字段
let modifiedBody = body
    // 新增的替换操作
    .replace(/"can_receive":0/g, '"can_receive":1') // 将 "can_receive":0 改为 "can_receive":1
    .replace(/"reason":\d+/g, '"reason":0'); 
$notify(modifiedBody);
$done({body:modifiedBody});
