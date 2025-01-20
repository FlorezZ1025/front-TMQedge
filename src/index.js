import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'templates'));

app.use(express.static(path.join(__dirname, "assets")));


app.get('/', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.get('/index', (req, res) => {
  res.render('index');
})

app.get('/404', (req, res) => res.render('404'));
app.get('/500', (req, res) => res.render('500'));
app.get('/accordion', (req, res) => res.render('accordion'));
app.get('/alerts',(req, res) => res.render('alerts'))
app.get('/badge', (req, res) => res.render('badge'));
app.get('/blank-page',(req, res) => res.render('blank-page'))
app.get('/block-ui', (req, res) => res.render('block-ui'));
app.get('/buttons', (req, res) => res.render('buttons'));
app.get('/calendar', (req, res) => res.render('calendar'));
app.get('/cards', (req, res) => res.render('cards'));
app.get('/charts', (req, res) => res.render('charts'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/crypto', (req, res) => res.render('crypto'));
app.get('/data-tables', (req, res) => res.render('data-tables'));
app.get('/dropdowns', (req, res) => res.render('dropdowns'));
app.get('/email', (req, res) => res.render('email'));
app.get('/file-manager', (req, res) => res.render('file-manager'));
app.get('/form-elements', (req, res) => res.render('form-elements'));
app.get('/form-layout', (req, res) => res.render('form-layout'));
app.get('/form-validation', (req, res) => res.render('form-validation'));
app.get('/icons', (req, res) => res.render('icons'));
app.get('/invoice', (req, res) => res.render('invoice'));
app.get('/list-group', (req, res) => res.render('list-group'));
app.get('/lockscreen', (req, res) => res.render('lockscreen'));
app.get('/modal', (req, res) => res.render('modal'));
app.get('/pagination', (req, res) => res.render('pagination'));
app.get('/popovers', (req, res) => res.render('popovers'));
app.get('/price', (req, res) => res.render('price'));
app.get('/progress', (req, res) => res.render('progress'));
app.get('/select2', (req, res) => res.render('select2'));
app.get('/session-timeout', (req, res) => res.render('session-timeout'));
app.get('/social', (req, res) => res.render('social'));
app.get('/spinners', (req, res) => res.render('spinners'));
app.get('/tables', (req, res) => res.render('tables'));
app.get('/toasts', (req, res) => res.render('toasts'));
app.get('/tree-view', (req, res) => res.render('tree-view'));
app.get('/typography', (req, res) => res.render('typography'));

app.use((req, res) => {
  res.status(404).render('404');
});

app.use((req, res) => {
  res.status(500).render('500'); 
});

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(path.join(__dirname,'templates'));
    console.log(`Server is running on port http://localhost:${PORT}`);
});


// import fs from "fs";
// import path from "path";

// const directory = "templates";

// fs.readdir(directory, (err, files) => {
//   if (err) {
//     console.log("Error al leer el directorio", err);
//     throw err;
//   }


//   files.forEach(file => {
//     if (file.endsWith(".html")) {
//       const oldPath = path.join(directory, file);
//       const newPath = path.join(directory, file.replace(".html", ".ejs"));
//       fs.rename(oldPath, newPath, err => {
//         if (err) throw err;
//         console.log(`rename: ${file} -> ${file.replace(".html", ".ejs")}`);
//       });
//     }
//   });
// });