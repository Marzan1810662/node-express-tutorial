const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('User hit the server');
    console.log(req.url);
    const url = req.url

    //home page
    if (url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    //about page
    else if (url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //404
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>Page Not Found!</h1>')
        res.end()
    }
})

server.listen(5000)