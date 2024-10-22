const cookieName = '库迪咖啡'
const yanzi = init()
const token = $request.headers['token']
const body = $request.body;
let mobile = 'phone';

// yanzi.msg(cookieName, `working`, ``)

// yanzi.msg(cookieName, `body`, body)
// yanzi.log(`body: ${body}`)

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
    // $notify(cookieName, '获取token成功:', mobile + "----" + token);
    yanzi.msg(cookieName, `获取token成功`, mobile + "----" + token)
    yanzi.log("获取到完整CK：" + "\n\n" + mobile + "----" + token)
    // 保存Cookie到本地存储（可选）
    // $persistentStore.write(cookie, cookieName);
} else {
    // 未能获取到 token 或 mobile，通知失败
    $notify('获取失败', '', '请求中没有找到token或mobile');
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
