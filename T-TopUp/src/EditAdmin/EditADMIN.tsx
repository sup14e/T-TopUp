import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import icon from "../assets/Misc/admin.png"
import BackButton from "../assets/Misc/back.png"
import "./EditADMIN.css";
import Axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';


function EditADMIN() {

  const username = useParams();

  const navigate = useNavigate();

  const [newAdmin,setNewAdmin] = useState({});


  const getFormerAdmin = () => {

    console.log(username.username);

    Axios.get(`http://localhost:8119/admin/${username.username}`)
      .then((response) => {
        setNewAdmin(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching admin:', error);
      });
  };


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send POST request to backend API endpoint
      const response = await Axios.put(`http://localhost:8119/edit-admin/${username.username}`, newAdmin);
      console.log(response.data); // Log response from the server
      // Handle success, maybe show a success message to the user
      navigate('/admin-management');

      alert(`Admin ${newAdmin.username} has been updated`)

    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle error, maybe show an error message to the user
    }
  };

  const handleChange = (e:any)=>{
    setNewAdmin((prev)=>({...prev, [e.target.name] : e.target.value}))
    console.log(newAdmin)
  }

  const handleDelete = async () => {
    try {
      
        await Axios.delete(`http://localhost:8119/admin/${newAdmin.username}`);
      
        console.log(`Admin with username ${newAdmin.username} deleted successfully`);
        alert(`Admin ${newAdmin.username} has been deleted `);
        navigate('/admin-management');

    } catch (error) {

        console.error("Error:", error); 
    }
  };

  useEffect(() => {
    getFormerAdmin();
    console.log("admin : ",newAdmin.username);
  }, []);
  

  return (
    <>
      <header>
        <NavBar />
      </header>

  <div className="flex justify-start ml-20 mt-8" >
    <a href="/admin-management"><button type="button"><img src={BackButton} className="h-8 w-auto"></img></button> </a>
  </div>

      <body>
        <form className="Body">
          <div className="UserManageFrame drop-shadow">
            <div className="UserPicAdj">
              
              <img className="UserPic" src={icon}></img>
            </div>

            <div>
              <div className="inputsRow">
                <div className="inputGroup">
                  <label >Username</label>
                  <input
                    type="text"
                    name="username"
                    className="Edit"
                    value={newAdmin.username}
                    onChange={handleChange}
                    disabled
                  />
                </div>

              <div className="inputGroup">
                <label>First Name</label>
                  <input type="text" className="Edit" name="fname" value={newAdmin.fname} onChange={handleChange}/>
              </div>
            </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Email</label>
                      <input type="text"  name="email" value={newAdmin.email} onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Last Name</label>
                      <input type="text" name="lname" value={newAdmin.lname} onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <div>
                <div className="inputsRow">
                  <div className="inputGroup">
                    <label >Password</label>
                      <input type="text" name="password" value={newAdmin.password} onChange={handleChange}/>
                  </div>
                
                  <div className="inputGroup">
                    <label>Telephone</label>
                      <input type="text" name="phone_num" value={newAdmin.phone_num} onChange={handleChange}/>
                  </div>
                </div>
              </div>

                <button type="submit" className="SubmitbuttonA" onClick={handleSubmit}>
                  SAVE
                </button>
                <button type="reset" className="SubmitbuttonB" onClick={handleDelete}>
                  DELETE
                </button>
            </div>
          </div>
        </form>
      </body>

      <Footer />
    </>
  );
}

export default EditADMIN;
