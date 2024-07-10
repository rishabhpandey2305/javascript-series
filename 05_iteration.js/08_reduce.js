const value = [
    {
        course : "java",
        price : 499,
    },
    {
        course : "mob",
        price : 400,
    }
]

const val = value.reduce((acc,item)=> acc+ item.price,0)

console.log(val);