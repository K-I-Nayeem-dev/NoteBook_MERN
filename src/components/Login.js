import React, {useState} from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
// const Swal = require('sweetalert2')

const Login = () => {

    let histroy = useNavigate();

    // Email & password input box define
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    // Email & Password error para define
    let emailError = document.querySelector('.emailError')
    let passError = document.querySelector('.passError')

    const [cred_info, setCred_info] = useState({email: '', password: ''})


    //Login Email & Password Check//
    const handleSubmit = async (e)=>{
        e.preventDefault();

        // Login api from backend
        
            if(cred_info.email === ''){
                console.log('Empty');
                email.style.borderColor = "red";
                emailError.style.color = "red";
                emailError.innerHTML = 'Plz Enter Email';
            }
            if(cred_info.password === ''){
                console.log('Empty');
                password.style.borderColor = "red";
                passError.style.color = "red";
                passError.innerHTML = 'Plz Enter Password';
            }

            if(cred_info.email){
                email.style.borderColor = "gray";
                emailError.innerHTML = '';
            }
            if(cred_info.password){
                password.style.borderColor = "gray";
                passError.innerHTML = '';
            }
            
            if(cred_info.email && cred_info.password){

                const response = await fetch('http://localhost:5000/auth/login', {
                    method: "POST", 
                    headers: {
                            "Content-Type": "application/json",
                    },
                        body: JSON.stringify({email: cred_info.email, password: cred_info.password})
                    });
                
                    const json = await response.json();
                    console.log(json);
                    if(json.success){

                        localStorage.setItem('token', json.authtoken);
                        histroy('/');

                        console.log('login done');
                        
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
                                title: 'Login successfully'
                            })
                        }
                        else{
                            Swal.fire({
                                title: 'Credentials Error!',
                                text: 'Do not match our records',
                                icon: 'error',
                                confirmButtonText: 'Try Again'
                            })
                        }
            }
    }


    //Check Email & Password from form/////
    const onChange = (e)=>{
        setCred_info({...cred_info, [e.target.name] : e.target.value});
    }


    return (
        <>
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={cred_info.email} id="email" name="email" onChange={onChange} />
                            <p className="emailError"></p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control"  value={cred_info.password} id="password" name='password' onChange={onChange}/>
                            <p className="passError"></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login