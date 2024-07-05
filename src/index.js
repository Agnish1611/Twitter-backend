const express = require('express');

const connect = require('./config/db-config');

const { PORT } = require('./config/server-config');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('connected to db');
});

