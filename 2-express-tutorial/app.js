const http = require('http')
const { readFileSync } = require('fs')

//get all the information
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//creating server
const server = http.createServer((req, res) => {
    // console.log('User hit the server');
    console.log(req.url);
    const url = req.url

    //home page
    if (url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(homePage)
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
    //home page styles (css file)
    else if (url === '/styles.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(homeStyle)
        res.end()
    }
    //home page logo
    else if (url === '/logo.svg') {
        res.writeHead(200, {
            'Content-Type': 'image/svg+xml'
        })
        res.write(homeLogo)
        res.end()
    }
    //home page logics (javascript)
    else if (url === '/browser-app.js') {
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
        })
        res.write(homeLogic)
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