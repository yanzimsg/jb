// 优酷云包场显示可领取 qx重写
$notify("test!!!");
let body = $response.body;
$notify(body);
// 获取当前时间戳的13位数
let currentTimeStamp = Date.now();

// 添加 lastFinishTime 参数
let modifiedBody = body
    .replace(/"hasSeat":false/g, '"hasSeat":true')
    .replace(/"hasSeat":"false"/g, '"hasSeat":"true"')
    .replace(/TASK_NOT_FINISH/g, 'TASK_FINISHED')
    .replace(/userState":"\d"/g, 'userState":"3"')
    .replace(/unitReportCount":"\d"/g, 'unitReportCount":"10"')
    .replace(/"totalFinishCount":"0","unitFinishCount":"0"/g, '"totalFinishCount":"1","unitFinishCount":"1"')
    .replace(/"loginLimit":"1"/g, `"loginLimit":"1","lastFinishTime":"${currentTimeStamp}"`);
$notify(modifiedBody);
$done({body:modifiedBody});
