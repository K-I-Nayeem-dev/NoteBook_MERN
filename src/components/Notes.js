import React, { useContext, useEffect, useRef } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';
import AddNotes from './AddNotes';

const Notes = () => {
    let num = 1;
    const context = useContext(NoteContext);
    const {notes, getNotes} = context;
    const ref = useRef(null);
    // fetch Notes for client site//
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    // Edit or Update Notes 
    const updateNotes = (note)=>{
        ref.current.click();
        console.log("Edit Button is Perfectly Work");
    }
    
    return (
        <>
        {/* AddNote Components */}
        <AddNotes/>

        {/* Modal For Edit Notes */}
{/* 
        <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button> */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>


        {/* // Notes Fetching by Maps */}
        <div className="container mb-4">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
                <h2>Your Notes</h2>
                <div className="row">
                {notes.map((note)=>{
                    return <NoteItems key={note._id} updateNotes={updateNotes} note={note} num={num++} />
                })}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Notes