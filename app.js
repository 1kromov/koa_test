const KOA = require("koa");
const bodyParser = require("koa-bodyparser");
const sequelize = require("./config/db");
const static = require("koa-static");
const cors = require("@koa/cors");
const config = require('config');
const router = require("./routes/index.routes.js")
const PORT = config.get("port") 
const app = new KOA();


app.use(bodyParser());
app.use(static("public"));
app.use(cors());
app.use(router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server ${PORT}da ishga tushdi`))
    }catch (error) {
        console.error("Unable to connect error")
        console.log(error)
    }
};
start()