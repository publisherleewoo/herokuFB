let Sub2 = require('../../models').Sub2;
 



exports.read = function () {
    return new Promise((resolve,reject)=>{    
        Sub2.findAll()
            .then(results=>resolve(results))
            .catch(e=>{
                reject("에러");
            })
    })
}

exports.create =function (reciveData) {
    return new Promise((resolve,reject)=>{    
         let { todo, done } = reciveData
        if (done === "true") done = true
        if (done === "false") done = false

        Sub2.create({
            todo,
            done
        })
            .then(results=>resolve("생성 성공"))
            .catch(e=>{
                reject("에러");
            })
    })
}

exports.update = function () {
    return new Promise((resolve,reject)=>{    
        Sub2.update({
            where:{no},
            todo,
            done
        })
            .then(results=>resolve("업데이트 성공"))
            .catch(e=>{
                reject("에러");
            })

    })
}



exports.delete = function (no) {
    return new Promise((resolve,reject)=>{    
        Sub2.delete({
            where:{no},
        })
            .then(results=>resolve("제거 성공"))
            .catch(e=>{
                reject("에러");
            })

    })
}


