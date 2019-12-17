# Unit 11 Express Homework: Note Taker

## Description

An application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.

* The following HTML routes were created:

  * GET `/notes` - returns the `notes.html` file.

  * GET `*` - returns the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The API routes were created:

  * GET `/api/notes` - reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - recieves a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. 
  
