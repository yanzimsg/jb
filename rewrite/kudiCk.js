let token = $request.headers['token'];

// 发送通知
$notify('库迪TOKEN获取成功', '库迪token:', token);

$done({});
