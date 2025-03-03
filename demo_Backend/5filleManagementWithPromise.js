import fs from 'fs/promises';

let a = await fs.readFile('demo_Backend/5fileManaged2.txt');
console.log(a.toString());

