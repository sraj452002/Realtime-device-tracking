import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// get dirname in ES MOdules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set view engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// set static file
app.use(express.static(path.join(__dirname, '../public')));


export {app};