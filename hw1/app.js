const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// fs.mkdir(path.join(__dirname,'main','inPerson'), {recursive:true}, (err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
const onlineUsers = [
    { name: 'Igor', age: 17, city: 'Lviv'},
    { name: 'Anton', age: 22, city: 'Ternopil'},
    { name: 'Andrii', age: 20, city: 'Rivne'}
];

const InPersonUsers = [
    { name: 'Vitalii', age: 21, city: 'Zhytomyr'},
    { name: 'Nastya', age: 20, city: 'Kyiv'},
    { name: 'Pavlo', age: 29, city: 'Lutsk'}
];
//
// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'Users:\n\n', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
// //
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `Users:\n\n`, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
onlineUsers.forEach(user => {
    for (const key in user) {
        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${key.toUpperCase()}: ${user[key]}\n`, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    }

});

InPersonUsers.forEach(user => {
    for (const key in user) {
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${key.toUpperCase()}: ${user[key]}\n`, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    }

});


// const changeUsers = () => {
//     fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${data}`, {flag: 'w'},(err) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
//     })
//
//     fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${data}`, {flag: 'w'},(err) => {
//             if (err) {
//                 console.log(err)
//             }
//         })
//     })
// }
//
// changeUsers()
