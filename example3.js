const http = require('http');
const url = require('url');

let counterOne = 0;
let counterTwo = 0;

const server = http.createServer((req, res) => {
console.log('Запрос получен');
    if (req.url === '/') {
       
        res.writeHead(200, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        counterOne++;
        res.end(`<h1>Главная страница</h1>
        <a href="/about">Переход на страницу About</a>
        <p>Количество посещений страницы ${counterOne}</p>`);

    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        counterTwo++;
        res.end(`<h1>About</h1>
        <a href='/'>Переход на страницу Главная</a>
    <p>Количество посещений страницы ${counterTwo}</p>`);

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        
        res.end('<h1>Страница не найдена!</h1>');
            
        }
    });

    


const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);

});