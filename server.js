const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

//Connection String to Tyrania-Server
mongoose.connect('mongodb://TyraniaDeveloper:u6gF%21hT6%3F-9Cr@193.31.24.224:27017/Tyrania?authSource=admin', {useUnifiedTopology: true, useNewUrlParser: true});

const dataSchema = new mongoose.Schema({
    kills: String,
    deaths: String,
    played_games: String
}, {collection: 'Bedwars'});

const xd = mongoose.model('', dataSchema);

app.get('/bedwars', (req, res) => {
    xd.find({}, function(err, lol) {
        res.render('bedwars', {
            xList: lol
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})

//Static Files
app.use(express.static('public'))
app.use('/assets', express.static(__dirname + 'public/assets'))
app.use('/images', express.static(__dirname + 'public/images'))