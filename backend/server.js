const app = require('./app');

app.listen(process.env.PORT||4500,()=>{
    console.log('server is working on port 4500');
})