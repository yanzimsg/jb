const cookieName = '霸王茶姬'
const yanzi = init()
const body = $request.body;


if (body) {
    // 解析 body 
    const bodyObj = JSON.parse(body);  // 假设请求体是 JSON 格式，如果是其他格式请自行调整解析逻辑
    const userId = bodyObj.userInfo.id;
    const userMobile = bodyObj.userInfo.mobile;
    // 获取 userToken
    const userToken = bodyObj.userToken;
}

// 如果获取到了 Cookie
if (userId && userMobile && userToken) {
    // 发送通知，包含 token 和 mobile
    // $notify(cookieName, '获取token成功:', mobile + "----" + token);

    yanzi.msg(cookieName, `获取token成功`, userMobile + "----" + userId + "----"+ userToken)
    yanzi.log(cookieName +"获取到完整CK：" + "\n\n" + userMobile + "----" + userId + "----"+ userToken)
  
    // 保存Cookie到本地存储（可选）
    // $persistentStore.write(cookie, cookieName);
} 


function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}


$done({});
