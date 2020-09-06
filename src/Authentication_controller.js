const User = require('./userModel')
const bycrpt = require("bcrypt")
module.exports ={
    async login(req,res){
        const {user, password} = req.body
        console.log(user + " " + password)
        let mongoUser = await User.findOne({email: user})
        if (mongoUser){
            if(bycrpt.compareSync(password, mongoUser.password)){
                console.log("SENHA ACEITA")
                res.send("LOGADO");
            }else{
                console.log("SENHA Errada")

                res.send("Email ou senha Incorreto")
            }

        }else{
            console.log("Email Errado")

            res.send("Email ou senha Incorreto")
        }

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