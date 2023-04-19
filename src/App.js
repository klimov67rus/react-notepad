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
    async () =>
      await allItems
        .filter((item) => {
          const regex = new RegExp(filterQuery, "i");
          return regex.test(item.text);
        })
        .toArray(),
    [filterQuery]
  );

  const [selectNote, setSelectNote] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    if (notes && !notes.length) {
      setSelectNote(false);
    }
  }, [notes]);

  /* CREATE NEW NOTE */
  const createNoteHandler = () => {
    const newNote = {
      text: "",
      date: new Date(),
    };
    allItems
      .add(newNote)
      .then((createNoteId) => {
        return allItems.get(createNoteId);
      })
      .then((createNote) => {
        setSelectNote(createNote);
      });
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
    const answer = window.confirm("Are you sure?");
    if (answer) allItems.delete(id);
  };

  return (
    <div className="notes container">
      <Toolbar
        onCreate={createNoteHandler}
        selectNote={selectNote}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        deleteNoteHandler={deleteNoteHandler}
      />
      <NoteList
        notes={notes}
        selectNote={selectNote}
        setSelectNote={setSelectNote}
        setFilterQuery={setFilterQuery}
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
