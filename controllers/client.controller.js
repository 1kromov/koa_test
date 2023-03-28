const User = require("../models/User");

const getClients = (ctx) => {
    ctx.body = "Client";
};
const getClientByID = (ctx) => {
    ctx.body = "ID-" + ctx.params.id;
};
const addClient = async (ctx) => {
    try {
        const {phone_number, first_name, last_name} = ctx.request.body;
        const user = User.create({
            phone_number:phone_number,
            first_name: first_name, 
            last_name: last_name,
        })
        ctx.status = 201;
        ctx.body = "Add";
    }catch (error) {
        console.log(error);
    }
    // console.log(ctx.request.body)
};

module.exports = {
    getClients,
    addClient,
    getClientByID,
}