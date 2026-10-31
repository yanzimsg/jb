let obj = JSON.parse($response.body);
const list = obj.rs?.serviceDetailVo?.skuDetailVosList;
if (Array.isArray(list)) {
    list.forEach(item => {
        if (item.skuStatus === 5) {
            item.skuStatus = 0;
            item.skuStatusText = null;
        }
    })
}
$response.body = JSON.stringify(obj);
