// (function(exports, require, module, __dirname, __filename){}) 

const chalk = require('chalk');
const text = require('./data');
const http = require('http'); // создание сервера
const fs = require('fs');
const path = require('path');
/*
console.log(chalk.blue(text));
console.log(__dirname, __filename);
*/

const server = http.createServer((req, res) => {
/*
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }

            res.writeHead('200', {
                'Content-Type': 'text/html'
            })

            res.end(data)
        })
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }

            res.writeHead('200', {
                'Content-Type': 'text/html'
            })

            res.end(data)
        })
    }
*/

    let filePatch = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    const ext = path.extname(filePatch);
    let contentType = 'text/html';

    switch (ext) {
        case '.css': {
            contentType = 'text/css'
            break
        }
        case '.js': {
            contentType = 'text/js'
            break
        }
        default: {
            contentType = 'text/html'
        }


    }

    if (!ext) {
        filePatch += '.html'
    }

    fs.readFile(filePatch, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data) => {
                if (error) {
                    res.writeHead(500);
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead('200', {
                'Content-Type': contentType
            })
    
            res.end(content)
        }
    })
    
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been started... ${PORT}`);
})