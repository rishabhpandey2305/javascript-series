let val = "rishabh"
for (const i of val) {
    // console.log(i);
}
let val2 = "Hello World"
for (const i of val2) {
    if(i == " ")
    {
        continue;
    }
    // console.log(i);
}

const map = new Map();
map.set('In', "India");
map.set('Fr', "France");
map.set('In', "India");
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}


// For of loop is not work for objects
// const obj = {
//     game1 : 'NFS',
//     game2 : 'GTA',
// }

// for(const [key,Value] of obj)
// {
//     console.log(key, ";", Value);
// }