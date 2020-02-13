let express = require('express')
app = express(),
    BP = require('body-parser')
CK = require('cookie-parser')
session = require('express-session')
const port = 80
// app.use((req,res,next) => {
//     console.log('Use express')
//     next()
// })
// app.use('/use/:id', (req,res,next) => {
//     console.log('Use express/',req.params.id)
//     next()
// })

app.use(CK('Arim'))
let urlen = BP.urlencoded({ extended: false })
app.use(session({
    secret: 'foor-bar',
    cookie: { maxAge: 6000 },
    resave: false,
    saveUninitialized: false
}))
app.use((req, res, next) => {
    let sess = req.session
    sess.views = (sess.views) ? ++sess.views : 1
    console.log(sess.views)
    next()
})
app.get('/views', (req, res) => {
    res.send("load: " + req.session.views)
})
app.get('/setCK', (req, res) => {
    res.cookie('name', 'Arim')
    res.cookie('surname', 'Arima')
    res.send('Complete')
})
app.get('/getCK', (req, res) => {
    console.log(req.query.foo)
    res.send(req.cookies.name + ' ' + req.cookies.surname + ' ' + req.query.foo)
})
app.post('/add', urlen, (req, res) => {
    // console.log('a: ',req.body.a)
    // console.log('b: ',req.body.b)
    let ans = parseInt(req.body.a) + parseInt(req.body.b)
    //res.send(ans.toString()+'<br>'+ res.body.userid)
    res.send(ans.toString())
})
app.use(express.static('./pub'))
// app.get('/', (req, res) => {
//     res.send('Hello')
// })
// app.get('/foo', (req, res) => res.send('Hello_foo'))


app.listen(port, () => {
    console.log('server: ', port)
})