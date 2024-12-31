const cookieName = '霸王茶姬'
let body = $request.body;

if (body) {
    // 解析 body 
    const bodyObj = JSON.parse(body);  // 假设请求体是 JSON 格式，如果是其他格式请自行调整解析逻辑
    const userId = bodyObj.userInfo.id;
    const userMobile = bodyObj.userInfo.mobile;
    // 获取 userToken
    const userToken = bodyObj.userToken;
	if (userToken && userId && userMobile) {
        //$notification.post(cookieName, '获取Cookie成功', '')
        $notify('qmai', 'TOKEN获取成功', userMobile + "----" + userId + "----"+ userToken + "----");
        //console.log(cookieName +"获取到完整CK：" + "\n\n\n\n" + userMobile + "----" + userId + "----"+ userToken + "----电脑抓key和iv \n")
    }
} 
$done({});
