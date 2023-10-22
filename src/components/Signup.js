import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import LoadingBar from 'react-top-loading-bar'

const Signup = () => {

    let navigate = useNavigate();

    const [progress, setProgress] = useState(0)

    const [signup, setSignup] = useState({name: '', email:'', password: '', confirm_password:''})
    const {name, email, password, confirm_password} = signup;

    //Handle Signup form
    const handleSignup = async (e)=>{
        e.preventDefault();

        // Password Match

        if(password === confirm_password){
            const response = await fetch('http://localhost:5000/auth/createUser', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify({name, email, password})
                });
                const json = await response.json();
                console.log(json);
    
                if(json.success){
                    localStorage.setItem('token', json.authtoken);
                    navigate('/');
                        //Sweet Alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    
                    Toast.fire({
                        icon: 'success',
                        title: 'Signup successfully'
                    })
                }
                else{
                    Swal.fire({
                        title: 'Signup Error!',
                        text: 'Please Check Your information',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                }
        }
        else{
            Swal.fire({
                title: 'Password Error!',
                text: 'Password & confirm Password do Not match',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        }
    }

    //Check Email & Password from form/////
    const onChange = (e)=>{
        setSignup({...signup, [e.target.name] : e.target.value});
    }

    return (
        <>
        <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header text-center fw-bold">iNotebook Signup</div>
                        <div className="card-body">
                            <form onSubmit={handleSignup}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name='name'  value={signup.name} onChange={onChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name='email' value={signup.email} onChange={onChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' value={signup.password} onChange={onChange} required minLength={5}/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm_password" name='confirm_password' value={signup.confirm_password} onChange={onChange} required minLength={5}/>
                                </div>

                                <button disabled={name.length === 0 || email.length === 0 || password.length === 0 || confirm_password.length === 0} onClick={() => setProgress(100)} type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup