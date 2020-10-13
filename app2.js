let fs = require('fs');

fs.readFile('readMe.txt', 'utf-8', (err, data) => {
    console.log(data);
});