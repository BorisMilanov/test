function name(params) {
    let step = Number(params.pop())
    let result = [];
    for (let i = 0; i < params.length; i+=step) {
        result.push(params[i])
        
    }
    console.log(result.join('\n'))
}
name(['5', 
'20', 
'31', 
'4', 
'20', 
'2'])