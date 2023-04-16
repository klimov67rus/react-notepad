import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

import "./app.css";

import Workspace from "./components/Workspace";
import NoteList from "./components/NoteList";
import Toolbar from "./components/Toolbar";

const db = new Dexie("NotesDb");
db.version(1).stores({
  notes: "++id, text, date",
});

const { notes: allItems } = db;

const App = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const notes = useLiveQuery(
    async () => await allItems.where("text").startsWith(filterQuery).toArray(),
    [filterQuery]
  );

  const [selectNote, setSelectNote] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    notes && !notes.length && setSelectNote(false);
  }, [notes]);

  /* CREATE NEW NOTE */
  const createNoteHandler = () => {
    const newNote = {
      text: "",
      date: new Date(),
    };
    allItems.add(newNote);
  };

  // UPDATE
  const updateNotesHandler = (updateNote) => {
    allItems.update(updateNote.id, {
      text: updateNote.text,
      date: updateNote.date,
    });
  };

  // DELETE NOTE
  const deleteNoteHandler = (id) => {
    allItems.delete(id);
  };

  return (
    <div className="notes container">
      <Toolbar
        onCreate={createNoteHandler}
        setFilterQuery={setFilterQuery}
        selectNote={selectNote}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
      />
      <NoteList
        notes={notes}
        deleteNoteHandler={deleteNoteHandler}
        selectNote={selectNote}
        setSelectNote={setSelectNote}
      />
      <Workspace
        formVisible={formVisible}
        selectNote={selectNote}
        setSelectNote={setSelectNote}
        updateNotes={updateNotesHandler}
      />
    </div>
  );
};

export default App;
