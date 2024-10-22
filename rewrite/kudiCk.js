let token = $request.headers['token'];
let body = $request.body;
$notify('test', 'test token:', $request);
// 发送通知
$notify('库迪TOKEN获取成功', '库迪token:', token + "\n" + body);

$done({});
