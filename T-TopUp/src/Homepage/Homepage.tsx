import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./Homepage.css";
import ad1 from "../assets/Game_icon/Val/val_banner.png";
import ad2 from "../assets/Game_icon/TF2/tf2_banner.png";
import ad3 from "../assets/Game_icon/OW/ow_banner.png";

import Axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';



function Homepage() {

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

  useEffect(() => {
    getGames();
  }, []); // Call getGames() once when component mounts

  const location = useLocation();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <body >
        <article>
          <div className="slider">
            <div className="slides">
              <img id="slide-1" src={ad1} alt="ad1"></img>
              <img id="slide-2" src={ad2} alt="ad2"></img>
              <img id="slide-3" src={ad3} alt="ad3"></img>
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </article>
      </body>
      <br></br>

      <div id="game-zone" >
        <p className="text">All Games</p>


        <article className="gamecontainer">
          {gameList.map((val,key)=>{
            return(
              <article className="gamecolumn">
                <section className="imggame" key={key}>
                  <a href={`/game-detail/${val.gname}`}>
                    <img src={val.icon} className="gameicon"></img>
                  </a>
                </section>
                <a className="gamename" href={`/game-detail/${val.gname}`}>{val.gname}</a>
              </article>
            )
          })}

        </article>
      </div>
      <Footer />
    </>
  );
}
export default Homepage;
