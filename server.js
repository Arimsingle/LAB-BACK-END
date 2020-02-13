let express = require('express'),
app = express()
app.set('views','./views')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('fruit',{foo:'bar', fruits:['A','B']})
})
app.listen(80)