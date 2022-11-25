import React, {FC} from 'react';
import Input from "./Input";
import {CreateNote} from "../types/Types";

const CreateNotes:FC<CreateNote> = ({noteTitle, handlerTitleNote, countAt, createNote}) => {
  return (
    <div className="item item-last">
      <Input
        noteTitle={noteTitle}
        handlerTitleNote={handlerTitleNote}
      />
      <div className="item-bottom">
        <div className="item-Remaining">{countAt} Remaining</div>
        <button className="item-save" onClick={createNote}>Save</button>
      </div>
    </div>
  );
};

export default CreateNotes;