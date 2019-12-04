import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/route';
import database from './src/models/database';

//Creation de l'app
const app = express();

//Configuration de serveur avec Cors et BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

//Utilisation des routes
app.use('/', router);

//Lancement de server
const port = 3000;

// app.listen(port, ()=> {
//     console.log(`Server lancé sur le port ${port}...`);
// });

database()
    .then(async () => {
        console.log("Database server connected!");
        app.listen(port, ()=> {
            console.log(`Server lancé sur le port ${port}...`);
        });
});

export default app;