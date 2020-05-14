// File System
const fs = require('fs');
const path = require('path')

/*
// Первый параметр в асинхронной функции является ошибка
// Создаем папку
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err;
    }

    console.log('Папка создана');
})
*/

const filePath = path.join(__dirname, 'test', 'text.txt');

/*
// создает и перезаписывает файл
fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
    if (err) {
        throw err;
    }
    console.log('Файл создан');

    fs.writeFile(filePath, '\nHello Again!', (err) => {
        if (err) {
            throw err;
        }
        console.log('Файл создан');
    })
    // добавляет в файл
    fs.appendFile(filePath, '\nString Added', (err) => {
        if (err) {
            throw err;
        }
        console.log('Файл создан');
    })
})
*/

// Прочитать файл
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err;
    }
    console.log('Content: ', content);
    /*
    // перевод в строку, если не указали кодировку
    const data = Buffer.from(content)
    console.log('Content: ', data.toString());
    */
})