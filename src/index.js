const express = require('express');

const connect = require('./config/dbConfig');

const PORT = 3000;

    const app = express();

    app.listen(PORT, async () => {
        console.log(`server started on port ${PORT}`);
        await connect();
        console.log('connected to db');
    });

