const _ = require('lodash');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

const OperationType = mongoose.model('operationTypes');
const Disciplina = mongoose.model('discipline');

module.exports = app => {

    app.get('/api/operationtasks', async (req, res) => {
        const response = await fetch(req.baseUrl + '/operationtasks');
        const operationTasks = await response.json();

        let operationType = [];
        operationTasks.map(ot => {
            operationType.push(ot.operationType);
        });

        let uniqueOperationType = _.uniqWith(operationType, _.isEqual);

        OperationType.create(uniqueOperationType, function (err, temps) {

            if (err) {
                console.log(err);
                // terminate request/response cycle
                return res.send('Error saving');
            }
        
            res.send('<p>Saving Succesfully</p>');
        });
    });

    app.get('/api/discipline', async (req, res) => {
        const response = await fetch(req.baseUrl + '/operationtasks');
        const operationTasks = await response.json();

        let operationType = [];
        operationTasks.map(ot => {
            operationType.push(ot.operationType);
        });

        let uniqueOperationType = _.uniqWith(operationType, _.isEqual);

        let discipline = [];
        uniqueOperationType.map(uot => {
            discipline.push(uot.discipline);
        });

        let uniqueDiscipline = _.uniqWith(discipline, _.isEqual);
        uniqueDiscipline = uniqueDiscipline.map((obj) => ({ id: obj }));

        for(var discItem in uniqueDiscipline){
            new Disciplina(uniqueDiscipline[discItem])
              .save()
              .catch((err)=>{
                console.log(err.message);
              });
        }

        res.send('<p>Saving Succesfully</p>');

    });
};