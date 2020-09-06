const User = require('./userModel')
module.exports ={
    async login(req,res){
        const {user, password} = req.body
        console.log(user + " " + password)
        res.send('Senha:' + req.password)
    },
    async register(req, res){
        const {email, password, name} = req.body
        console.log ("Email:"+ email + " Senha:" + password + " Name:" + name )
        let user = await User.findOne({email})
        try {
            user = await User.create({name: name, email: email, password:password })
        }catch(e){
            console.log(e)

        }
        res.send("Registro realizado")
    }
}