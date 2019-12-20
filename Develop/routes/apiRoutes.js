// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var noteData = require("../db/db.json");
var util = require("util");
var fs = require("fs");

const readFileASync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, response) {
    let structuredNotes;
    readFileASync("db/db.json", "utf8", function (err, res) {
      if (err) throw err;
      structuredNotes = [].concat(JSON.parse(res));
      response.json(structuredNotes);
    })

  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/notes", function (req, res) {
    readFileASync("db/db.json", "utf8", function (err, data) {
      var json = JSON.parse(data)
      //console.log("body: "+req.body)
      json.push(req.body)
      writeFileAsync("db/db.json", JSON.stringify(json), function (err) {
        if (err) {
          console.log("err while writting the file")
        }
        console.log("done adding")
      })
    });
  });
  function getNotes() {
    readFileASync("db/db.json", "utf8", function (err, res) {
      if (err) throw err;
      let structuredNotes = [].concat(JSON.parse(res));
      return structuredNotes
    })
  };
  // app.delete("/api/notes/:id", function (req, res) {
  // //  Get all notes, remove the note with the given id,write the filtered notes
  //   readFileASync("db/db.json", "utf8", function (err, res) {
  //     if (err) throw err;
  //     let structuredNotes = [].concat(JSON.parse(res));
  //     for (var i = 0; i < structuredNotes.length; i++) {
  //       if (structuredNotes[i].id !== id){}
  //     } )
      // Lilo I need your help figuring out this one
  //   })
  // });

};


