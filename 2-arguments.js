const arg = process.argv.slice(2);

if(arg.length === 0) {
    console.log("No argument");
} else if (arg.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}


// const args = process.argv.slice(2);

// switch (args.length) {
//     case 0:
//         console.log("No argument");
//         break;
//     case 1:
//         console.log("Argument found");
//         break;
//     default:
//         console.log("Arguments found");
// }