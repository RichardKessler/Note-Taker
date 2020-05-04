// All API call routes
const fs = require('fs');
const db = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        console.log('Notes: ', db);
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        const userNote = req.body;
        allNotes = notes.length;
        userNote.id = String(notes.length+1);
        notes.push(userNote);
        writeJSONFile(notes);
        res.json(true);
    })

    app.delete('/api/notes', (req, res) => {
        let noteID = req.params.id;
        if (notes.length <= 1){
            notes.pop();
        }else{
            notes.splice(noteID - 1, 1);
            notes.forEach(newID);
        }
        function newID(item, index){
            item.id = index + 1;
        }
        writeJSONFile(notes);
        res.json(true);
    })

    function writeJSONFile(notes){
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
    }
}