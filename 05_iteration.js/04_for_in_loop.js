const obj = {
    js : "java script",
    cpp : "C++",
};

for (const key in obj) {
    console.log(`the value of ${key} is ${obj[key]}`);
}
