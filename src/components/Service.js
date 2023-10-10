import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
const Service = () => {
    const val = useContext(NoteContext);
  return (
    <h1>This is Service Part in Blog and Context Name {val.state.name} & Class {val.state.class}</h1>
  )
}

export default Service