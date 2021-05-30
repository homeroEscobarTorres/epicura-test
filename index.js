const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/dev');

require('./models/OperationType');
require('./models/Disciplina');

mongoose.connect(keys.MONGO_URI);

const app = express(); 

app.use(express.json());
app.use(function(req, res, next){
    req.baseUrl = keys.BASE_URL;
    next();
});

require('./routes/operationTasksRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);