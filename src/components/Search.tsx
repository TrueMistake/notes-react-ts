import React, {FC} from 'react';
import {SearchObject} from "../types/Types";

const Search:FC<SearchObject> = ({searchNotes}) => {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search"
      onChange={e => searchNotes(e)}/>
  );
};

export default Search;