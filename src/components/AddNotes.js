import React, { useContext, useState }from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNotes = () => {

    const context = useContext(NoteContext);
    const {addNotes} = context;


    //seleted Input Area By Id*****
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let tags = document.querySelector('#tags');
    //select Errors classes*****
    let titleErrorMsg = document.querySelector('.titleErrorMsg');
    let descErrorMsg = document.querySelector('.descErrorMsg');
    let tagErrorMsg = document.querySelector('.tagErrorMsg');

    //select Add notes fields by State*************
    const [note, setNote] = useState({title: "", description: "", tags: ""});

    // Add Notes method And send Error if note fields empty***********
    const NoteHandler = (e)=>{
        e.preventDefault();
        // if(note.title === '' && note.description === '' && note.tags === ''){
        //     error.innerHTML = `Empty field Not Allowed`;
        //     setTimeout(() => {
        //         error.innerHTML = null;
        //     }, 1000);
        // }else{
        //     addNotes(note.title, note.description, note.tags);
        // }
        if(note.title === ''){
             //title Error Msg Start
            titleErrorMsg.innerHTML = 'Title Field cannot be Empty';
            titleErrorMsg.style.color = 'red';
            titleErrorMsg.style.marginTop = '5px';
            title.style.borderColor = "red";
             //title Error Msg End
        }
        
        if(note.description === ''){
            //description Error Msg Start
            descErrorMsg.innerHTML = 'description Field cannot be Empty';
            descErrorMsg.style.color = 'red';
            descErrorMsg.style.marginTop = '5px';
            description.style.borderColor = "red";
            //description Error Msg End
        }
        if(note.tags === ''){
            //Tags Error Msg Start
            tagErrorMsg.innerHTML = 'tags Field cannot be Empty';
            tagErrorMsg.style.color = 'red';
            tagErrorMsg.style.marginTop = '5px';
            tags.style.borderColor = "red";
            //Tags Error Msg End
        }

        // Title Error Solve
        if(note.title){
            titleErrorMsg.innerHTML = '';
            title.style.borderColor = "black";
        }
        // Description Error Solve
        if(note.description){
            descErrorMsg.innerHTML = '';
            description.style.borderColor = "black";
        }

        // Tags Error Solve
        if(note.tags){
            tagErrorMsg.innerHTML = '';
            tags.style.borderColor = "black";
        }

        //Final Noted add
        if(note.title && note.description && note.tags){
            addNotes(note.title, note.description, note.tags);
            // console.log(Math.ceil(Math.random(note.id) * 10000000000));
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
                        <p className="titleErrorMsg"></p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' aria-describedby="emailHelp" onChange={onChange}/>
                        <p className="descErrorMsg"></p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tags" name='tags' aria-describedby="emailHelp" onChange={onChange}/>
                        <p className="tagErrorMsg"></p>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={NoteHandler}>Add Notes</button>
                </form>
            </div>
        </div>
        </div>
    </>
    )
}

export default AddNotes