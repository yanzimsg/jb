$notification.post('优酷云包场', '修改返回', '')

//let currentTimeStamp = Date.now();

let body = $response.body;
// 添加 lastFinishTime 参数
let modifiedBody = body
    .replace(/"hasSeat":false/g, '"hasSeat":true')
    .replace(/"hasSeat":"false"/g, '"hasSeat":"true"');
    //.replace(/TASK_NOT_FINISH/g, 'TASK_FINISHED')
    //.replace(/userState":"\d"/g, 'userState":"3"')
    //.replace(/unitReportCount":"\d"/g, 'unitReportCount":"10"')
    //.replace(/"totalFinishCount":"0","unitFinishCount":"0"/g, '"totalFinishCount":"1","unitFinishCount":"1"')
    //.replace(/"loginLimit":"1"/g, `"loginLimit":"1","lastFinishTime":"${currentTimeStamp}"`);
// $notify(modifiedBody);

console.log(modifiedBody)
$done({body:modifiedBody});
