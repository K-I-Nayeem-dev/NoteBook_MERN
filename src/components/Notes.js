import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';
import AddNotes from './AddNotes';

const Notes = () => {
    let num = 1;
    const context = useContext(NoteContext);
    const {notes, getNotes} = context;
    
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
        {/* AddNote Components */}
        <AddNotes/>

        {/* // Notes Fetching by Maps */}
        <div className="container mb-4">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
                <h2>Your Notes</h2>
                <div className="row">
                {notes.map((note)=>{
                    return <NoteItems key={note._id} note={note} num={num++} />
                })}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Notes