let obj = {
  code: 0,
  success: true,
  msg: "成功",
  data: {
    completedTaskNum: 4,
    subTaskNum: 4,
    prizeStatus: 0,
    activityStatus: 2
  }
};
$done({ body: JSON.stringify(obj) });
