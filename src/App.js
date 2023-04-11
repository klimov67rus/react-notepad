import React, { useState, useEffect } from "react";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Workspace from "./components/UI/Workspace/Workspace";
import Layout from "./components/UI/Layout/Layout";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import SearchBox from "./components/UI/SearchBox/SearchBox";
import ListItem from "./components/ListItem/ListItem";

const App = () => {
  const date_now = new Date();
  const date_minutes =
    date_now.getMinutes() < 10
      ? `0${date_now.getMinutes()}`
      : date_now.getMinutes();
  const time_now = `${date_now.getHours()}:${date_minutes}`;

  const initNote = {
    id: 0,
    title: "Новая заметка",
    date: time_now,
    text: "No additional text",
  };

  const [noteList, setNoteList] = useState([initNote]);
  const [selectNote, setSelectNote] = useState(initNote);

  const onSelectNoteHandler = (id) => {
    setSelectNote(noteList.filter((item) => item.id == id)[0]);
  };

  const addNoteHandler = (note) => {
    const newID = noteList.length;

    if (selectNote.id == 0) {
      setNoteList((prev) => [
        ...prev,
        {
          ...note,
          id: newID,
          date: time_now,
        },
      ]);
    } else {
      setNoteList((prevNoteList) => {
        return prevNoteList.map((item) => {
          if (item.id == selectNote.id) {
            item.title = note.title;
            item.text = note.text;
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    setSelectNote(noteList.filter((item) => item.id == noteList.length - 1)[0]);
  }, [noteList]);

  const filterHandler = (search_text) => {
    const filtredNote = noteList.filter((item) =>
      item.title.includes(search_text)
    );
    if (filtredNote.length) {
      setNoteList(filtredNote);
      console.log(filtredNote);
    }
  };

  return (
    <Layout>
      <Toolbar>
        {/* <SearchBox onChangeSearchText={filterHandler} /> */}
      </Toolbar>
      <Sidebar>
        {noteList.map((item) => {
          return (
            <ListItem
              isSelect={selectNote.id}
              onSelectNote={onSelectNoteHandler}
              key={item.id}
              item={item}
            />
          );
        })}
      </Sidebar>
      <Workspace
        initNote={initNote}
        note={selectNote}
        addNote={addNoteHandler}
      />
    </Layout>
  );
};

export default App;
