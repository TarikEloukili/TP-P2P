const server = require("./server");
const router = require("./router");
const handlers = require("./requestHandlers");

const handle = {
    "/": handlers.start,
    "/start": handlers.start,
    "/upload": handlers.upload,
    "/find": handlers.find,
    "/show": handlers.show,
    "/login": handlers.login,
    "/logout": handlers.logout,
};

server.start(router.route, handle);
