const express = require('express');

const app = express();
const server = app.listen(8000, () => {
    console.log('server on port 8000');
});