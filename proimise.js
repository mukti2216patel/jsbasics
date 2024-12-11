var ans = new Promise(function(res , rej){
    return res("sabse pehle ghar par aao")
})
var p2 = ans
.then(function(d){
    console.log(d)
    return new Promise(function(res , rej){
        return res("gate kholo");
    })
})
var p3 = p2.then(function(d){
    console.log(d)
    return new Promise(function(res , rej){
        return res("khana banao")
    })
})
var p4 = p3.then(function(d){
    console.log(d);
    return new Promise(function(res , rej)
    {
        return res("so jao")
    })
})
p4.then(function(d){
    console.log(d)
})
