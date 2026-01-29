if ($request.url.includes("ad-task-center.xiaohongshu.com/api/adtaskcenter/daka/query-task-progress")) {
    $done({
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            code: 0,
            success: true,
            msg: "成功",
            data: {
                completedTaskNum: 4,
                subTaskNum: 4,
                prizeStatus: 0,
                activityStatus: 2
            }
        })
    });
} else {
    $done({});
}
