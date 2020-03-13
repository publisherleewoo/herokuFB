const app = require('express')()
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const models = require('./models')
const bodyParser = require('body-parser')
const router = require('./controller')


models.sequelize.sync()
console.log("process.env.NODE_ENV:::::::::::::::::::::::::::::::"+process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
    console.log("NODE_ENV production용 서버")
    // app.use(cors({
    //     origin: 'https://publisherleewoo.github.io/202003f-0/',
    //     optionsSuccessStatus: 200
    // }))
}else if (process.env.NODE_ENV === "development") {
    console.log("NODE_ENV development용 서버")
    // app.use(cors({
    //     // origin: 'http://localhost:3000',
    //     optionsSuccessStatus: 200
    // }))
}
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})