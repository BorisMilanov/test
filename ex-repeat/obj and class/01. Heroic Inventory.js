function inventory (data) {
    let inventat = JSON.stringify(data.reduce((acc,currentValue)=>{
        let [name,level,items] = currentValue.split(' / ');
        acc.push({name,level:Number(level),items: items ? items.split(',').map(x => x.trim()):[]});
        return acc
    },[]))
    console.log(inventat)
}
inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])