import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import icon from "../assets/Misc/admin.png"
import BackButton from "../assets/Misc/back.png"
import "../EditAdmin/EditADMIN.css"
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function AddADMIN() {

  
  const navigate = useNavigate();


  //data for new admin
  const [newAdmin,setNewAdmin] = useState({
    username:"",
    password:"",
    email:"",
    fname:"",
    lname:"",
    phone_num:"",
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send POST request to backend API endpoint
      const response = await Axios.post("http://localhost:8119/admin", newAdmin);
      console.log(response.data); // Log response from the server
      // Handle success, maybe show a success message to the user
      alert(`Admin ${newAdmin.username} has been added successfully`)
      navigate('/admin-management');
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle error, maybe show an error message to the user
    }
  };

  const handleChange = (e:any)=>{
    setNewAdmin((prev)=>({...prev, [e.target.name] : e.target.value}))
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
     
  <div className="flex justify-start ml-20 mt-8" >
    <a href="admin-management"><button type="button"><img src={BackButton} className="h-8 w-auto"></img></button> </a>
  </div>


      <body>
        <div className="Body">
          <div className="UserManageFrame drop-shadow">
            <div className="UserPicAdj">
              <img className="UserPic" src={icon}></img>
            </div>

            <div>
              <div className="inputsRow">
                <div className="inputGroup">
                  <label >Username</label>
                    <input type="text"  className="Add" name="username" onChange={handleChange}/>
                </div>

              <div className="inputGroup">
                <label>First Name</label>
                  <input type="text" className="Add" name="fname" onChange={handleChange}/>
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Email</label>
                      <input type="text"  className="Add" name="email" onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Last Name</label>
                      <input type="text" className="Add" name="lname" onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Password</label>
                      <input type="text"  className="Add" name="password" onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Telephone</label>
                      <input type="text"className="Add" name="phone_num" onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <a href="admin-management">
                <button type="submit" className="Submitbutton" onClick={handleSubmit}>
                  ADD
                </button>
              </a>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default AddADMIN;
