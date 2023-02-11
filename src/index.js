import  express  from "express";
import { engine } from "express-handlebars";
import path from 'path'
import * as url from 'url';
import routesTasks from "./Router/tasks.routes.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express();
const config = {
    Port: 3000,
}
app.set('views', path.join(__dirname, 'view'));
app.engine('hbs', engine(
    {
        extname: '.hbs',
    }
));
app.set('view engine', 'hbs');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('home')
})

app.use('/', routesTasks)

app.use('/*', (req,res)=>{
    res.status(404).json({
        message: 'Ruta No encontrada'
    })
  })
  

app.listen(config.Port, () => {
    console.log(`Example app listening on port ${config.Port}`)
  })