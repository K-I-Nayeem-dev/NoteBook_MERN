import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';
import AddNotes from './AddNotes';

const Notes = () => {

    // Alert Message Hide and Show

    let alert = document.querySelector('#success');

    let num = 1;
    const context = useContext(NoteContext);
    const {notes, getNotes, editNote} = context;
    const ref = useRef(null);
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etags: ""});


    // fetch Notes for client site//
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    // Edit or Update Notes for modal pop up
    const updateNotes = (currentNote)=>{
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags});
    }

    //select Add notes fields by State*************

    // Add Notes method And send Error if note fields empty***********
    const NoteHandler = ()=>{
        // context edit method & pass field by context
        editNote(note.id, note.etitle, note.edescription, note.etags);
        
        // update successfully done message sent
        alert.innerHTML = "Edit Note Successfully";
        alert.classList.remove('d-none');

        setTimeout(() => {
            alert.classList.add('d-none');
            alert.innerHTML = '';
        },2000);

    }
    // note change in modal mode  
    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    
    return (
        <>

        {/* AddNote Components */}
        <AddNotes/>

        {/* Modal For Edit Notes */}

        <button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange}/>
                        <p className="titleErrorMsg"></p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} aria-describedby="emailHelp" onChange={onChange}/>
                        <p className="descErrorMsg"></p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="etags" name='etags' value={note.etags} aria-describedby="emailHelp" onChange={onChange}/>
                        <p className="tagErrorMsg"></p>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={NoteHandler}>Update Note</button>
            </div>
            </div>
        </div>
        </div>


        {/* Edit or Delete Success Messge */}

        <div id='success' className="alert alert-success  d-none text-center"></div>


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

