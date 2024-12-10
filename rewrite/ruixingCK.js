let cookie = $request.headers['Cookie'];

// 发送通知
$notify('瑞幸CK获取成功', '瑞幸:', '1----'+ cookie);

$done({});
