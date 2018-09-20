const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();

/**
 * Server config
 */
function config() {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    })
}

/**
 * Endpoints Config
 */
function routerConfig() {
    app.use('/api', api)
    // demas enrutadores
    // Angular DIST output folder
    app.use(express.static(__dirname + '/dist'));
    
    // Send all other requests to the Angular app
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    });
}

// functions invocations
config()
routerConfig()


//Set Port
app.listen(process.env.PORT || 3000);