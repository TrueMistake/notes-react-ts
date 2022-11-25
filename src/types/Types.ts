import {ChangeEvent} from "react";

export interface NotesObject {
  title: string,
  date: string
}

export interface InputObject {
  noteTitle: string,
  handlerTitleNote: (event:ChangeEvent<HTMLInputElement>) => void
}

export interface SearchObject {
  searchNotes: (event:ChangeEvent<HTMLInputElement>) => void
}

export interface CreateNote {
  noteTitle: string,
  handlerTitleNote: (event:ChangeEvent<HTMLInputElement>) => void,
  countAt: number,
  createNote: () => void
}

export interface NoteObject {
  search: string,
  notes: NotesObject[],
  handlerRemoveNote: (index: number) => void
}