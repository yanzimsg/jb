
let body = $request.body;


if (body) {
    // 解析 body 
    let bodyObj = JSON.parse(body);  // 假设请求体是 JSON 格式，如果是其他格式请自行调整解析逻辑
    let userId = bodyObj.userInfo.id;
    let userMobile = bodyObj.userInfo.mobile;
    // 获取 userToken
    let userToken = bodyObj.userToken;
}

// 如果获取到了 Cookie
if (userId && userMobile && userToken) {

    $notification.post('茶姬Cookie', '获取成功', '')
    console.log("茶姬Cookie完整CK：" + "\n\n" + userMobile + "----" + userId + "----"+ userToken)
    
    // 保存Cookie到本地存储（可选）
    // $persistentStore.write(cookie, cookieName);
} 

$done({});
