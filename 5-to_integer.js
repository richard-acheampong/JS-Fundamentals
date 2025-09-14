const args = process.argv.slice(2);
let num = Number(args[0]);
let whole = Math.floor(num);

if (!args[0] || Number.isNaN(num)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${whole}`);
}

// switch (true) {
//     case args[0] === undefined:
//     case Number.isNaN(sum):
//         console.log("Not a number");
//         break;
//     default:
//         console.log(`My number: ${num}`);
// }