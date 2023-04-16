const {readFile , writeFile} = require('fs');


readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/writtenfile.txt',`This is the written file ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})