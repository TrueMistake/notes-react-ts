import React, {FC} from 'react';
import {NoteObject} from "../types/Types";

const Note:FC<NoteObject> = ({notes, search, handlerRemoveNote}) => {
  return (
    <>
      {notes.filter(el => el.title.includes(search)).map((item, index) => (
          <div className="item" key={index}>
            <div className="item-title">{item.title}</div>
            <div className="item-bottom">
              <div className="item-date">{item.date}</div>
              <div className="item-remove" onClick={() => handlerRemoveNote(index)}>
                <img src="https://cdn4.iconfinder.com/data/icons/business-finance-vol-12-2/512/25-128.png" alt=""/>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Note;