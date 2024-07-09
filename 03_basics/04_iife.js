// Immediately Invoked Function Expression (IIFE)

(function hey()
{
    console.log("hey");
})();

((name)=> {
    console.log(`second hey ${name}`);
})("Rishabh");
