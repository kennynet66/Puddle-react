import { useState } from "react";
import "./signup.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName ] = useState("")
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function showSuccess(msg: string, route: string){
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      navigate(route)
    }, 1500);
  }

  const signupUser = async (e: any)=> {
    e.preventDefault();
    const User = { firstName, lastName, email, password };

    const result = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(User)
    })

    const data: {message: string, error: string} = await result.json();

    if(data.message){
      showSuccess(data.message, '/login')
    }
  }

  return (
    <>
      <section className="login-section">
        <form className="login" id="login" onSubmit={signupUser}>
          <div>
            <h2 className="text-bold text-2xl">Signup</h2>
            <div className="input-div">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-div">
              <label htmlFor="lastName">Last name:</label>
              <input
              type="text"
              placeholder="Last name" 
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              />
            </div>
            <div className="input-div">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Input your email" id="email" 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="input-div">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Input your password"
                id="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
            <div className="input-div" id="passvisible">
              <input type="checkbox" name="showpass" id="showpass" />
              <label htmlFor="showpass">Show password</label>
            </div>
            <input
              type="submit"
              id="submit"
              className="login-btn"
              value="Signup"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
