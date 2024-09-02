import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


db.authenticate()
    .then(()=>{
        console.log("base de datos conectada")
    })
    .catch(error => console.log(error))
const app = express();

const port = process.env.PORT || 5000;


app.set('view engine', 'pug');
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.newYear = year.getFullYear();
    next();
})

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.use('/', router);
app.listen(port, ()=>{
    console.log('iniciando');
})