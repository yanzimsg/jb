const cookieName = '库迪咖啡'
const token = $request.headers['token']
const body = $request.body;
let mobile = '未找到 mobile 参数';
$notify('库迪Cookie 获取成功', 'token:', mobile + "----" + token);
if (body) {
    // 解析 body 中的 mobile 参数
    const bodyObj = JSON.parse(body);  // 假设请求体是 JSON 格式，如果是其他格式请自行调整解析逻辑
    if (bodyObj.mobile) {
        mobile = bodyObj.mobile;  // 提取 mobile 参数
    }
}

// 如果获取到了 Cookie
if (token) {
    // 发送通知，包含 token 和 mobile
    $notify('库迪Cookie 获取成功', 'token:', mobile + "----" + token);

    // 保存Cookie到本地存储（可选）
    // $persistentStore.write(cookie, cookieName);
} else {
    // 未能获取到 token 或 mobile，通知失败
    $notify('获取失败', '', '请求中没有找到token或mobile');
}

$done({});
