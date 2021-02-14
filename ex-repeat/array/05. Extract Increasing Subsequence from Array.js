function name(params) {
    let data = params.reduce((acc,currentEl)=>
    {
        let lastEl = acc[acc.length-1];
        if (lastEl <= currentEl || lastEl === undefined ) {
            acc.push(currentEl)
        }
        return acc;
    },[])
    console.log(data.join('\n'))
}
name([1, 
    2, 
    3,
    4])