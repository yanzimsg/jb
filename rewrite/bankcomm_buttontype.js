/*
  功能：将返回数据中的 "buttonType":"数字" 改写为 "buttonType":"01"
*/

let body = $response.body;

try {
  // 使用正则替换所有 buttonType 的数字值
  body = body.replace(/"buttonType":"\d+"/g, '"buttonType":"01"');
} catch (err) {
  console.log("替换出错：" + err);
}

$done({ body });
