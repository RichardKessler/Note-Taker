// All API call routes
const fs = require('fs');
const db = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        const userNote = req.body;
        allNotes = db.length;
        userNote.id = String(db.length + 1);
        db.push(userNote);
        writeJSONFile(db);
        res.json(true);
    })

    app.delete('/api/notes/:id', (req, res) => {
        var noteID = req.params.id;
        if (db.length <= 1){
            db.pop();
        }else{
            db.splice(noteID - 1, 1);
            db.forEach(newID);
        }
        function newID(item, index){
            item.id = index + 1;
        }
        writeJSONFile(db);
        res.json(true);
    })

    function writeJSONFile(db){
        fs.writeFile('db/db.json', JSON.stringify(db), function(err) {
            if (err) throw err;
        });
    }
}