import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
const Profile = () => {
  
    const context = useContext(NoteContext);
    const {fetchUserData} = context;
    const {_id, name, email} = fetchUserData;

  return (
    <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                      <h3>Welcome</h3>
                    </div>
                    <div className="card-body py-4">
                      <h5 className='my-3'>ID : {_id} </h5>
                      <h5 className='my-3'>Name : {name} </h5>
                      <h5 className='my-3'>Email : {email} </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile