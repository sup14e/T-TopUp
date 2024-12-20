import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import "../GameDet/GameDet.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditGame() {
    const gamename = useParams().gamename;

    const navigate = useNavigate();

    const [newGame,setNewGame] = useState({});

    const [newPackage,setNewPackage] = useState([]);

    const [SendPackage,setSendPackage] = useState({
      gname:"",
      point:"",
      unit:"",
      price:""
    });

    const getFormerGame = () => {
        console.log(`http://localhost:8119/game/${encodeURIComponent(gamename)}`);
        Axios.get(`http://localhost:8119/game/${encodeURIComponent(gamename)}`)
        .then((response) => {
            setNewGame(response.data[0]);
            console.log(response.data[0]);
        })
        .catch((error) => {
            console.error('Error fetching game:', error);
        })
    };


  const handleSubmitGame = async (e:any) => {
    e.preventDefault();
    try {
      // Send POST request to backend API endpoint
      const response = await Axios.put(`http://localhost:8119/edit-game/${encodeURIComponent(gamename)}`, newGame);
      console.log(response.data); // Log response from the server
      // Handle success, maybe show a success message to the user

      alert("Changes saved")

    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle error, maybe show an error message to the user
    }
  };

  const handleSubmitPackage = async (e:any) => {
    e.preventDefault();
        try {
            const response = await Axios.post(`http://localhost:8119/add-package/${newGame.gname}`, SendPackage);
            console.log(response.data);
            // Handle success, maybe show a success message to the user
            alert("Package successfully added")
            // Reset the newPackage state after successful submission
            setSendPackage({
                gname: "", // Reset other fields as needed
                point: "",
                unit: "",
                price: ""
            });
            // Optionally, you can fetch the updated package list after adding a new package
            getPackage();
        } catch (error) {
            console.error("Error:", error); // Log any errors
            // Handle error, maybe show an error message to the user
        }
  };

  const handleDeleteGame = async () => {
    try {
      
        await Axios.delete(`http://localhost:8119/edit-game/${games.gname}`);
      
        console.log(`Game ${newGame.gname} deleted successfully`);
        alert(`Game ${newGame.gname} has been deleted`);
        navigate('/product-management');

    } catch (error) {
        console.error("Error:", error); 
    }
  };

  useEffect(() => {
    getFormerGame();
    getPackage();
    console.log("game : ",gamename);
  }, []);
    
    // const handleSubmitGame = async (e:any) => {
    //     e.preventDefault();
    //     try {
    //       // setNewPackage(prevPackage => ({...prevPackage, gname: newGame.gname}));
    //       // Send POST request to backend API endpoint
    //       const response = await Axios.post("http://localhost:8119/edit-game", newGame);
    //       console.log(response.data); // Log response from the server
    //       alert('Save game successful');
    //       getPackage;
    //       console.log(`Game Name = ${newGame.gname}`)
    //       // Handle success, maybe show a success message to the user
    //     //   navigate('/product-management');
    //     } catch (error) {
    //       console.error("Error:", error); // Log any errors
    //       // Handle error, maybe show an error message to the user
    //     }
    //   };

    const handleChangeGame = (e:any)=>{
        setNewGame((prev)=>({...prev, [e.target.name] : e.target.value}))
    }

    const getPackage = () =>{
        console.log(`http://localhost:8119/package/${encodeURIComponent(gamename)}`)
        Axios.get(`http://localhost:8119/package/${encodeURIComponent(gamename)}`)
      .then((response) => {
        setNewPackage(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
    };

    // const handleSubmitPackage = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         const response = await Axios.post(`http://localhost:8119/add-package/${newGame.gname}`, newPackage);
    //         console.log(response.data);
    //         // Handle success, maybe show a success message to the user
    //         alert("Add Package Successful")
    //         // Reset the newPackage state after successful submission
    //         setNewPackage({
    //             gname: "", // Reset other fields as needed
    //             point: "",
    //             unit: "",
    //             price: ""
    //         });
    //         // Optionally, you can fetch the updated package list after adding a new package
    //         getPackage();
    //     } catch (error) {
    //         console.error("Error:", error); // Log any errors
    //         // Handle error, maybe show an error message to the user
    //     }
    // };

      const handleChangePackage = (e:any)=>{
        setSendPackage((prev)=>({...prev, [e.target.name] : e.target.value}))
      }

      const handleDeletePackage = async (point:number) => {
        try {
            console.log(`http://localhost:8119/delete-package/?point=${point}&gname=${gamename}`)
            await Axios.delete(`http://localhost:8119/delete-package/?point=${point}&gname=${gamename}`);
          
            console.log(`Package with ${point} deleted successfully`);
            alert(`Package with ${point} ${SendPackage.unit} deleted successfully`);
            getPackage(); // Update the package list

        } catch (error) {

            console.error("Error:", error); 
        }
      }

      const handleCancelAll = async ()=>{
        try {
            await Axios.delete(`http://localhost:8119/remove-game/${gamename}`);
            alert(`${gamename} has been removed`);
            navigate('/product-management');
            
        } catch (error) {

            console.error("Error:", error); 
        }
      }

  const [packageModal, setPackageModal] = useState(false);

  const togglePackageModal = () => {
    setPackageModal(!packageModal);
  };

  const [discountModal, setDiscountModal] = useState(false);

  const toggleDiscountModal = () => {
    setDiscountModal(!discountModal);
  };

  const handleClickSubmitPackage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior of the button click event
    await handleSubmitPackage(e); // Pass the event object to the function
    togglePackageModal(); // Then toggle the modal
};

    const handleClickCancelPackage = ()=>{
        togglePackageModal(); // Then toggle the modal
    }

  useEffect(() => {
    getFormerGame;
    getPackage();
  }, []); // Call getGames() once when component mounts

  // if (modal) {
  //     document.body.classList.add('active-modal')
  // } else {
  //     document.body.classList.remove('active-modal')
  // }

  return (
    <>
      <body>
        <header>
          <NavBar />
        </header>
        <div className="mt-24">

            <a href="/product-management">
            <img src={back} id="back-img"></img>
            </a>
          
        </div>
        <main className="layout">
          <section>
            <div className="game-detail">
              {/* {<img src={val}></img>} */}
              <textarea name = "icon" 
              className="w-64 h-64 bg-gray-300 rounded-2xl" 
              style={{ backgroundColor: '#d9d9d9' }} 
              onChange={handleChangeGame}>
              </textarea>

              {/* <input type="file"></input> */}
              <div className="frame" />
              <div className="game-desc">
                <input
                    name="gname"
                  className="w-11/12 text-4xl font-bold ml-3 mb-2 border-0"
                  maxLength={20}
                  placeholder="Game Name"
                  onChange={handleChangeGame}
                  value={newGame.gname}
                ></input>
                <p>
                  <textarea
                    name = "gdesc"
                    rows={7}
                    className="w-full bg-transparent"
                    placeholder="Description"
                    onChange={handleChangeGame}
                    value={newGame.gdesc}
                  ></textarea>
                </p>
              </div>
              <div className="game-attr -mt-1.5">
                <p>
                  Platform:
                  <input
                    name = "platform"
                    className="w-44 bg-transparent border-0"
                    placeholder="Input"
                    onChange={handleChangeGame}
                    value={newGame.platform}
                  ></input>
                </p>
                <p>
                  Genre:
                  <input
                    name = "genre"
                    className="w-48 bg-transparent border-0"
                    placeholder="Input"
                    onChange={handleChangeGame}
                    value={newGame.genre}
                  ></input>
                </p>
                <p>
                  Publisher:
                  <input
                    name = "publisher"
                    className="w-40 bg-transparent border-0"
                    placeholder="Input"
                    onChange={handleChangeGame}
                    value={newGame.publisher}
                  ></input>
                </p>
              </div>
            </div>
          </section>

          <button
                type="button"
                className="save-attr w-32 h-11 bg-green-500 text-lg text-white text-center font-semibold rounded-md"
                onClick={handleSubmitGame}
              >
                Save Game
            </button>

          <div className="detail">
            <section className="detail">
              <div className="package">
                <h6>Packages</h6>
                <div className="package-box">
                  <div className="box">
                    <button
                      onClick={togglePackageModal}
                      className="w-full h-full rounded-2xl font-medium text-6xl text-center"
                    >
                      <p style={{ transform: "translate(0px, -5px)" }}>+</p>
                    </button>

                    {packageModal && (
                      <div className="popup" id="popup">
                        <div className="overlay">
                          <div className="popup-content">
                            <p className="text-xl font-semibold">
                              Package Input
                            </p>

                            <input
                              name = "point"
                              className="mt-5"
                              style={{ width: "350px" }}
                              placeholder="Point Amount"
                              onChange={handleChangePackage}
                            />
                            <input
                              name = "unit"
                              className="mt-5"
                              style={{ width: "350px" }}
                              placeholder="Unit"
                              onChange={handleChangePackage}
                            />
                            <input
                              name = "price"
                              className="mt-5"
                              style={{ width: "350px" }}
                              placeholder="Price"
                              onChange={handleChangePackage}
                            />

                            <br />

                            <button
                              onClick={handleClickSubmitPackage}
                              className="w-24 h-9 mt-5 bg-green-500 text-base text-white text-center font-semibold rounded-md"
                            >
                              Submit
                            </button>

                            <button
                              onClick={handleClickCancelPackage}
                              className="w-24 h-9 mt-5 bg-gray-300 text-black text-center font-semibold rounded-md ml-7"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {newPackage.map((val)=>{
                    return(
                        <div className="box">
                            <input name="package" type="radio"></input>
                            <button className='w-7 h-7 rounded-full text-white text-lg bg-red-500 absolute' onClick={()=>handleDeletePackage(val.point)}
                                            style={{ transform: 'translate(235px, -10px)' }}
                                        >
                                            <p style={{ transform: 'translate(0px, -2.5px)' }}>x</p>
                            </button>
                                <div className="box-detail">
                                    <p className="coin">{val.point} {val.unit}</p>
                                    <p className="thb">{val.price}</p>
                                </div>
                        </div>
                    )
                  })}
                </div>
              </div>
            </section>

            <section className="detail">
              <div className="package">
                <h6>Discount Code</h6>
                <div className="package-box">
                  <div className="box">
                    <button
                      onClick={toggleDiscountModal}
                      className="w-full h-full rounded-2xl font-medium text-6xl text-center"
                    >
                      <p style={{ transform: "translate(0px, -5px)" }}>+</p>
                    </button>

                    {discountModal && (
                      <div className="popup" id="popup">
                        <div className="overlay">
                          <div className="popup-content">
                            <p className="text-xl font-semibold">
                              Discount Input
                            </p>

                            <input
                              className="mt-5"
                              style={{ width: "350px" }}
                              placeholder="Code"
                            />
                            <input
                              className="mt-5"
                              style={{ width: "350px" }}
                              placeholder="Discount Value"
                            />

                            <br />

                            <button
                              onClick={toggleDiscountModal}
                              className="w-24 h-9 mt-5 bg-green-500 text-base text-white text-center font-semibold rounded-md"
                            >
                              Save
                            </button>

                            <button
                              onClick={toggleDiscountModal}
                              className="w-24 h-9 mt-5 bg-gray-300 text-black text-center font-semibold rounded-md ml-7"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </section>

            <div className="flex justify-end">
              <a href="/product-management">
                <button
                  type="button"
                  className="w-32 h-11 bg-green-500 text-lg text-white text-center font-semibold rounded-md"
                  >
                  Save
                </button>
              </a>
              
                <button
                  type="button"
                  className="w-32 h-11 bg-red-500 text-lg text-white text-center font-semibold rounded-md ml-7"
                  onClick={handleCancelAll}
                >
                  Remove
                </button>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default EditGame;