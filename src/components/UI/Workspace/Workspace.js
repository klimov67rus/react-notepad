import { useContext, useState, useEffect } from "react";

import styles from "./Workspace.module.css";

const Workspace = ({ note, initNote, addNote }) => {
  const [titleNote, setTitleNote] = useState(note.title);
  const [textNote, setTextNote] = useState(note.text);
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    setTitleNote(note.title);
    setTextNote(note.text);
  }, [note]);

  useEffect(() => {
    if (titleNote !== "Новая заметка" || textNote !== "No additional text") {
      const debounse = setTimeout(() => {
        addNote({
          title: titleNote,
          text: textNote,
        });
        setIsSave(true);
        setTimeout(() => {
          setIsSave(false);
        }, 1000);
      }, 1000);
      return () => {
        clearTimeout(debounse);
      };
    }
  }, [titleNote, textNote]);

  const titleChangeHandler = (e) => {
    setTitleNote(e.target.value);
  };
  const textChangeHandler = (e) => {
    setTextNote(e.target.value);
    console.log(e.target.value);
  };

  const saveNoteHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.workspace}>
      <form onSubmit={saveNoteHandler}>
        <div className={styles.workspace__row}>
          <label htmlFor="title">Название</label>
          <input onChange={titleChangeHandler} id="title" value={titleNote} />
        </div>
        <div className={styles.workspace__row}>
          <label htmlFor="text">Текст</label>
          <textarea
            onChange={textChangeHandler}
            id="text"
            rows={4}
            value={textNote}
          ></textarea>
        </div>
        <div className={styles.workspace__row}>
          {isSave && (
            <span className={styles.workspace_status}>Автосохранение..</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Workspace;
