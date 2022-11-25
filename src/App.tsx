import React, {ChangeEvent, FC, useState} from 'react';
import {NotesObject} from "./types/Types";
import Search from "./components/Search";
import CreateNotes from "./components/CreateNotes";
import Note from "./components/Note";

const App:FC = () => {
  const [mode, setMode] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [notes, setNotes] = useState<NotesObject[]>([]);
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [countAt, setCountAt] = useState<number>(200);

  const changeMode = () => {
    setMode(!mode)
  }

  const searchNotes = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlerTitleNote = (event:ChangeEvent<HTMLInputElement>) => {
    setCountAt(200 - event.target.value.length);
    setNoteTitle(event.target.value);
  }

  const handlerDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  }

  const createNote = () => {
    const newNote:NotesObject = {
      title: noteTitle,
      date: handlerDate()
    }
    setNotes([...notes, newNote]);
    setNoteTitle('');
    setCountAt(200);
  }

  const handlerRemoveNote = (idx:number):void => {
    setNotes(notes.filter((item, index) => index !== idx));
  }

  return (
    <div className={mode ? 'App': 'App dark'}>
      <div className="wrapper">
        <div className="top">
          <h1>Notes</h1>
          <button className="top-toggle" type="button" onClick={changeMode}>Toggle Mode</button>
        </div>
        <Search searchNotes={searchNotes}/>

        <div className="list">
          {notes.length
            ? <Note
              search={search}
              notes={notes}
              handlerRemoveNote={handlerRemoveNote}
            />
            : null
          }
          <CreateNotes
            noteTitle={noteTitle}
            handlerTitleNote={handlerTitleNote}
            countAt={countAt}
            createNote={createNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
