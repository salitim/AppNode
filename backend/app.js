const express = require('express');

const app = express();

app.use((req, res)=>{
    res.json({ message: 'votre requete a bien été recu'});
});

module.exports = app;