import fs from 'fs';
console.log(fs);

fs.writeFileSync('demo_Backend/5fileManaged.txt', 'Hello World, this file is created by node js, form fileManagent.js!!');

fs.writeFile('demo_Backend/5fileManaged2.txt', 'Hello World2, ', () => {
    console.log('File created successfully');
    fs.readFile('demo_Backend/5fileManaged2.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });
});

fs.appendFile('demo_Backend/5fileManaged2.txt', 'Hello World!! repeated', (e,d) => {
    console.log('File appended successfully');
});

