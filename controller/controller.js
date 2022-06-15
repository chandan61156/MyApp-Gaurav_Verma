const { getEmailSend } = require("../service/service");

var func = {
    getLoginPost:(req, res, next)=>{
        getEmailSend(req)
        
        res.json({ "Name": req.body, "movie":"End Game"})
        console.log("Thanos Was Right");
        
    }
}

module.exports = func;