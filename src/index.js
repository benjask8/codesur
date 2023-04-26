const app = require('./server')

app.listen(app.get('port'), ()=>{
    console.log(`server listening on port ${app.get('port')}`)
})