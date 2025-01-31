import dotenv from 'dotenv';
import {app} from './app.js';
import homerouter from './Routes/Router.route.js';
import { server } from './socketio.js';
dotenv.config();

app.use("/",homerouter);

server.listen(process.env.PORT,()=>{console.log(`server is running on PORT:${process.env.PORT}`);
});