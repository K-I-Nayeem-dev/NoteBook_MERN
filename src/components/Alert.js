import React from 'react'

const Alert = (props) => {
  return (
    <>
    <div className="contianer">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="alert alert-success text-center" role="alert">
                    {props.message}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Alert