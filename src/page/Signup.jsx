import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase';
import Navbar from '../components/navbar';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main > 
        <Navbar/> 
        <div className="background">
                    <div id="card">
                        <div id="card-content">
                            <div id="card-title">
                                <h2>SignUp Page</h2>
                                <div className="underline-title"></div>
                            </div>
                            <form className="form">
                                <label for="user-email" style={{ paddingTop: "13px" }}>
                                    &nbsp;Email
                                </label>
                                <input id="email-address" className="form-content" type="email" name="email" autocomplete="on" required onChange={(e) => setEmail(e.target.value)} />
                                <div className="form-border"></div>
                                <label for="user-password" style={{ paddingTop: "22px" }}>&nbsp;Password
                                </label>
                                <input id="password" className="form-content" type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                                <div className="form-border"></div>
                                
                                <button id = "submit-btn"onClick={onSubmit}>
                                    Create Account
                                </button>
                                <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>    
                            </form>
                        </div>
                    </div>
                </div>      
        {/* <section>
            <div>
                <div>                  
                    <h1> FocusApp </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section> */}
    </main>
  )
}
 
export default Signup;