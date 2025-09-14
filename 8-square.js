const args = process.argv.slice(2);
const num = Number(args[0]);
const size = Math.floor(num);

if (!args[0] || Number.isNaN(num)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
    
}

// const args = process.argv.slice(2);
// const size = parseInt(args[0]);

// if (!args[0] || Number.isNaN(size)) {
//   console.log("Missing size");
// } else {
//   for (let i = 0; i < size; i++) {
//     console.log("X".repeat(size));
//   }
// }
