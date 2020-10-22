const User = require('./userModel')
const bycrpt = require("bcrypt")
module.exports ={
    async login(req,res){
        const {user, password} = req.body
        console.log(user + " " + password)
        let mongoUser = await User.findOne({email: user})
        if (mongoUser && bycrpt.compareSync(password, mongoUser.password)){
                res.send(mongoUser)
        }
        res.status(401).send({"error" : "Email ou Senha Invalidos"})
    },

    async register(req, res, next){

        const {email, password, name} = req.body

        let user = await User.findOne({email})
        try {
            if (!user){
                bycrptPassword = bycrpt.hashSync(password, 10)
                user = await User.create({name: name, email: email, password:bycrptPassword})
                res.send(user)
            }else{
                res.status(401).send({"error" : "Email ja Cadastrado"})
            }
        }catch(err){
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error)
        }
    }
}