const cookieName = '百事串码'
const yanzi = init()
const url = $request.url;

// 提取 token 参数
let tokenMatch = url.match(/token=([^&]*)/);
let token = tokenMatch ? tokenMatch[1] : '未找到 token';
// URL 解码
let decodedToken = decodeURIComponent(token);

yanzi.msg(cookieName, `url`, url)

// 如果获取到了 Cookie
if (decodedToken) {
    // 发送通知，包含 token 和 mobile
    // $notify(cookieName, '获取token成功:', mobile + "----" + token);
  
    yanzi.msg(cookieName, `获取token成功`, decodedToken)
    yanzi.log("获取到完整CK：" + "\n\n" + "百事串码+" + decodedToken)
  
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
