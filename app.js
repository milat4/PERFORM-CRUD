const express= require('express');
const dotEnv= require('dotenv');
dotEnv.config()
const userRoutes = require('./routes/userRoutes')
const dbConnect = require('./models/dbConnect')


const port = process.env.port||4000


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(express.static(__dirname+'/js'));

app.use('/', userRoutes);


const server = async()=>{
    await dbConnect.authenticate();
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })
}

server();


