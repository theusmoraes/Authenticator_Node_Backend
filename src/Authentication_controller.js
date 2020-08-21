module.exports ={
    async login(req,res){
        const {user, password} = req.body
        console.log(user + " " + password)
        res.send('Senha:' + req.password)
    }
}