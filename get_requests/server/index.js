var connect = require('connect')

var app = connect()
    .use(function(req, res) {
        if (req.url === "/home") {
            res.end("Home page");
        } else if (req.url === "/logRequestHeaders") {
            var headers = req.headers;
            console.log(headers);
            res.end("Logging headers in console");
        } else {
            res.end("Nothing to see here");
        }
    })
    .listen(3000)

    console.log("Listening on port 3000");