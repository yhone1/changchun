const code= {
    addCode(arr, code) {
        arr.push(code);
    },
    timeoutDeleteCode(arr, code) {
        setTimeout(function () {
            for (let i = 0; i < arr.length; i++) {
                if (code = arr[i]) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }, 50000);
    },
    deleteCode(arr, code) {
        for (let i = 0; i < arr.length; i++) {
            if (code = arr[i]) {
                arr.splice(i, 1);
                break;
            }
        }
    },
    checkCode(arr,code,callback){
        let flag=false;
        for (let i = 0; i < arr.length; i++) {
            if (code = arr[i]) {
               flag=true;
                break;
            }
        }
        callback(flag);
    },
    asyncCheckCode(arr,code){
            let flag=false;
            for (let i = 0; i < arr.length; i++) {
                if (code = arr[i]) {
                    flag=true;
                    break;
                }
            }
        return flag
    }

}
module.exports=code;