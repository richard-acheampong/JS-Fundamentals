const args = process.argv.slice(2);
let num = Number(args[0]);
let whole = Math.floor(num);

if (!args[0] || Number.isNaN(num)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < whole; i++) {
        console.log("C is fun");
    }
    
}