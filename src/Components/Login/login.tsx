import { useState } from "react";
import "./login.css";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function showError(msg: string) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: msg,
      footer: '<a href="/Signup">Create Account</a>'
    });
  }

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

  const loginUser = async (e: any) => {
    e.preventDefault();

    const User = { email, password }

    const loginRes = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(User)

    })
    const data: {error: string, message: string, token: string} = await loginRes.json()

    console.log(data);

    if(data.error){
      showError(data.error)
    } else if(data.message){
      showSuccess(data.message, '/products')
    }
    
    
  }

  return (
    <>
      <section className="login-section">
        <form onSubmit={loginUser} className="login">
          <div>
            <h2 className="text-bold text-2xl">Login</h2>
            <div className="input-div">
              <label htmlFor="email">Email:</label>
              <input 
              type="email" 
              placeholder="Input your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                required
                placeholder="Input your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              value="Login"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
