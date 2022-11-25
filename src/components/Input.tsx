import React, {FC} from 'react';
import {InputObject} from "../types/Types";



const Input:FC<InputObject> = ({noteTitle, handlerTitleNote}) => {
  return (
    <input
      type="text"
      className="item-title"
      placeholder="Type to add a note..."
      value={noteTitle}
      onChange={e => handlerTitleNote(e)}
    />
  );
};

export default Input;