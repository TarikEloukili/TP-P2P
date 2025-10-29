const { exec } = require("child_process");

function start(response) {
    console.log("Request handler 'start' was called.");
    setTimeout(function () {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello start");
        response.end();
    }, 60000);
}

function find(response) {
    console.log("Request handler 'find' was called.");
    exec(
        process.platform === "win32" ? "dir C:\\ /s" : "find /",
        { timeout: 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, stderr) {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(stdout || String(error || stderr));
            response.end();
        }
    );
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello upload");
    response.end();
}

function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello show");
    response.end();
}

function login(response) {
    console.log("Request handler 'login' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello login");
    response.end();
}

function logout(response) {
    console.log("Request handler 'logout' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello logout");
    response.end();
}

module.exports = { start, upload, find, show, login, logout };
