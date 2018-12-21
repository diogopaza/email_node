const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const nodemailer = require('nodemailer')

app.use( bodyParser.urlencoded({ extended:true}) )
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

    const config = {
        host:'smtp.mailtrap.io',
        port:2525,
        auth:{
            user:'6feb6740ff2c35',
            pass:'c3a022eef2ae79'
        }
    }

    const transporter = nodemailer.createTransport( config )




app.get("/", (req, res) => {
    res.render('index')
    
})

app.post("/send-email", (req, res) => {
    
    const message = {
        from: "diogopazacvel@gmail.com",
        to: "testeteste@uol.com.br",
        subject:"finalll",
        text:"lorem kjasklfjksladjfklasdjfkljsdakfl"

    }


    transporter.sendMail(message, (error, info) => {
        if(error){
            return res.status(200).send("falhou")
        }
        return res.status(200).send("Enviou")

    })
})

app.listen( 3000, ()=>{
    console.log("ouvindo na 3000 teste")
} )
