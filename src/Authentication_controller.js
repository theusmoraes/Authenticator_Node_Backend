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
        res.status(401).send("Email ou Senha Invalidos")
    },

    async register(req, res){
        const {email, password, name} = req.body
        let user = await User.findOne({email})
        if (!user){
            bycrptPassword = bycrpt.hashSync(password, 10)
            try {
                user = await User.create({name: name, email: email, password:bycrptPassword})
            }catch(e){
                console.log(e)
            }
        }else{
            console.log("Email ja cadastrado")
        }
        res.send("Registro realizado")
    }
}