import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import uuid from "react-uuid";
import { useLiveQuery } from "dexie-react-hooks";

import "./app.css";

import Workspace from "./components/Workspace";
import NoteList from "./components/NoteList";
import Toolbar from "./components/Toolbar";

const db = new Dexie("NotesDb");
db.version(1).stores({
  notes: "++id, title, text, date",
});

// db.notes.add({
//   [fieldname]: e.target.value,
//   date: new Date(),
// });

// const notesList = useLiveQuery(
//   () => db.notes.where("title").startsWith(search).toArray(),
//   [search]
// );

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectNote, setSelectNote] = useState(false);

  /* CREATE NEW NOTE */
  const createNoteHandler = () => {
    const newNote = {
      title: "Новая заметка",
      text: "",
      id: uuid(),
      date: new Date(),
    };
    setNotes([...notes, newNote]);
  };

  // UPDATE
  const updateNotesHandler = (updateNote) => {
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id == updateNote.id) {
          return updateNote;
        }
        return note;
      })
    );
  };

  // DELETE NOTE
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // FILTER

  const filterNotesHandler = (searchQuery) => {
    const filtredNotes = notes.filter((note) =>
      note.title.includes(searchQuery)
    );
    console.log(filtredNotes);
  };

  useEffect(() => {
    !notes.length && setSelectNote(false);
  }, [notes]);

  return (
    <div className="notes container">
      <Toolbar onCreate={createNoteHandler} filterNotes={filterNotesHandler} />
      <NoteList
        notes={notes}
        deleteNoteHandler={deleteNoteHandler}
        selectNote={selectNote}
        setSelectNote={setSelectNote}
      />
      <Workspace
        selectNote={selectNote}
        setSelectNote={setSelectNote}
        updateNotes={updateNotesHandler}
      />
    </div>
  );
};

export default App;
