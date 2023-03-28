const Router = require("@koa/router");
const {
    getClients,
    getClientByID,
    addClient,
} = require("../controllers/client.controller");

const router = new Router();

router.get("/",getClients);
router.get("/:id",getClientByID);
router.post("/",addClient);

module.exports = () => router.routes();