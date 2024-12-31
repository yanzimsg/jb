let token = $request.headers['token'];
let body = $request.body;
if (body) {
    $notify('cotti-reqBody', 'body:', body);
}
if (token){
  $notify('库迪TOKEN获取成功', '库迪token:', "phone----" + token);
}

$done({});
