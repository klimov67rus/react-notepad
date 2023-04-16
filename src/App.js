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

const { notes: allItems } = db;
// db.notes.add({
//   [fieldname]: e.target.value,
//   date: new Date(),
// });

const App = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const notes = useLiveQuery(
    async () => await allItems.where("title").startsWith(filterQuery).toArray(),
    [filterQuery]
  );
  // const [notes, setNotes] = useState(notes);
  const [selectNote, setSelectNote] = useState(false);

  useEffect(() => {
    notes && !notes.length && setSelectNote(false);
  }, [notes]);

  /* CREATE NEW NOTE */
  const createNoteHandler = () => {
    const newNote = {
      title: "Новая заметка",
      text: "",
      // id: uuid(),
      date: new Date(),
    };
    //setNotes([...notes, newNote]);
    allItems.add(newNote);
  };

  // UPDATE
  const updateNotesHandler = (updateNote) => {
    // setNotes((prev) =>
    //   prev.map((note) => {
    //     if (note.id == updateNote.id) {
    //       return updateNote;
    //     }
    //     return note;
    //   })
    // );

    allItems.update(updateNote.id, {
      title: updateNote.title,
      text: updateNote.text,
      date: updateNote.date,
    });
  };

  // DELETE NOTE
  const deleteNoteHandler = (id) => {
    //setNotes(notes.filter((note) => note.id !== id));

    allItems.delete(id);
  };

  return (
    <div className="notes container">
      <Toolbar onCreate={createNoteHandler} setFilterQuery={setFilterQuery} />
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
