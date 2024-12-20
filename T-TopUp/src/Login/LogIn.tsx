import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./LogIn.css"
import icon from "../assets/Misc/admin.png"
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();

    const [user, setNewUser] = useState({
        username:"",
        password:""
    });

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          // Send POST request to backend API endpoint
          const response = await Axios.post("http://localhost:8119/log-in", user);
          console.log(response.data); // Log response from the server
          if (response.data.token) {
            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);
            // Navigate to the desired page upon successful login
            navigate('/product-management');
            // Show a success message to the user
            alert('Login Successful');
          }
        } catch (error) {
          console.error("Error:", error); // Log any errors
          // Handle error, maybe show an error message to the user
          alert('Username or Password is incorrect')
        }
    };

    const handleChange = (e:any)=>{
        setNewUser((prev)=>({...prev, [e.target.name] : e.target.value}))
      }

    return (<>
    <header>
        <NavBar/>
    </header>

    <body>
        <div className="log-container">
            <div className="icon">
                <img src={icon}></img>
            </div>

            <div className="title">
                <p>Log In</p>
            </div>
            <form action="/log-in" method="POST">
                <div className="info">
                    <div className="inputGroup">
                        <p className="underline">Username / E-mail</p>
                        <input type="username" name="username" required onChange={handleChange}/>
                    </div>

                    <div className="inputGroup">
                        <p className="underline">Password</p>
                        <input type="password" name="password" required onChange={handleChange}/>
                    </div>

                    <div className="remember">
                        <div className="check">
                            <input type="checkbox" />
                        </div>
                        <p>Remember Me</p>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Log In</button>
                </div>
            </form>
        </div>
    </body>

    <footer>
        <Footer/>
    </footer>
    </>)
}

export default LogIn;