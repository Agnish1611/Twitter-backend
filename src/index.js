const express = require('express');

const connect = require('./config/db-config');

const { PORT } = require('./config/server-config');

const app = express();

app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log('connected to db');
});

