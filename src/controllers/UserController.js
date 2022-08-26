const User = require('../models/User');

module.exports = {
    async authenticate(req, res){
        const { login, password } = req.body;

        const user  = await User.findOne({ login }).select('+passowrd');

        if (!user) {
            return res.render("index");
        }
        if (password != user.password) {
            return res.render("index");
        }

        user.password = undefined;

        res.render("book.index");
    }
}