import React from 'react'

const Profile = () => {
  
  return (
    <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                      <h3>Welcome</h3>
                    </div>
                    <div className="card-body py-4">
                      <h5 className='my-3'>ID : </h5>
                      <h5 className='my-3'>Name : </h5>
                      <h5 className='my-3'>Email : </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile