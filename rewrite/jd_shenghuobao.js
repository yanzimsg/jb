let obj = JSON.parse($response.body);
if(obj.data && Array.isArray(obj.data)){
    obj.data.forEach(item=>{
        if(item.skuStatus === 5) item.skuStatus = 0;
    })
}
$response.body = JSON.stringify(obj);
