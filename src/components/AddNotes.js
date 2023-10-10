import React, { useContext, useState }from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNotes = () => {

    const context = useContext(NoteContext);
    const {addNotes} = context;

    let error = document.querySelector('#error');

    const [note, setNote] = useState({title: "", description: "", tags: ""});

    const NoteHandler = (e)=>{
        e.preventDefault();
        if(note.title === '' && note.description === '' && note.tags === ''){
            error.innerHTML = `Empty field Not Allowed`;
            setTimeout(() => {
                error.innerHTML = '';
            }, 1000);
        }else{
            addNotes(note.title, note.description, note.tags);
        }
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
    <>
        <div className="container my-4">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
                <h1>Add Notes</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tags" name='tags' aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <h2 id='error'></h2>
                    <button type="submit" className="btn btn-primary" onClick={NoteHandler}>Add Notes</button>
                </form>
            </div>
        </div>
        </div>
    </>
    )
}

export default AddNotes