import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import addg from "../assets/Misc/add_game.png";
import edit from "../assets/Misc/Edit_Cover.png";
import "./ProdMng.css";

import Axios from "axios";
import { useEffect, useState } from "react";

function ProdMng() {

  const [gameList, setGameList] = useState([]);

  const getGames = () => {
    Axios.get('http://localhost:8119/gamedatabase')
      .then((response) => {
        setGameList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  };

  const handleCancelAll = async (gamename:string)=>{
    try {
        await Axios.delete(`http://localhost:8119/remove-game/${gamename}`);
        alert(`${gamename} has been removed`);
        getGames();
        
    } catch (error) {

        console.error("Error:", error); 
    }
  }

  useEffect(() => {
    getGames();
  }, []); // Call getGames() once when component mounts

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <p id="title">Product Management</p>
        <p className="allG">All Games</p>

        <div className="game-container">
          <div className="game">
            <div className="iconArea">
              <a href="/add-game">
                <img className="g-icon" src={addg}></img>
              </a>
            </div>
            <p>Add Game</p>
          </div>

          {gameList.map((val,key)=>{
            return(
              <div className="game" key={key}>
                <div className="iconArea">
                  <a href={`/edit-game/${val.gname}`}>
                    <img className="g-icon" src={val.icon}></img>
                  <img className="editIcon" src={edit}></img></a>
                </div>
                <button className="close" onClick={() =>{handleCancelAll(val.gname)}}>X</button>
                <p>{val.gname}</p>
              </div>
            )
          })}

          
        </div>
      </body>

      <footer className="footerbar">
        <Footer />
      </footer>
    </>
  );
}

export default ProdMng;
