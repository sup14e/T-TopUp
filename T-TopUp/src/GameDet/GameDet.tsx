import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import "./GameDet.css";
import credit from "../assets/Misc/credit.png";
import mobile from "../assets/Misc/mobile.png";
import pp from "../assets/Misc/pp.png";

import Axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function GameDet() {

  const gameName = useParams();

  const [game, setGame] = useState([]);

  const [packages, setPackages] = useState([]);

  const getGame = () => {
    Axios.get(`http://localhost:8119/game/${gameName.gameName}`)
      .then((response) => {
        setGame(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching game:', error);
      });
  };

  const getPackages = () => {
    Axios.get(`http://localhost:8119/package/${gameName.gameName}`)
      .then((response) => {
        setPackages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching packages:', error);
      });
  };


  //fetch when start web
  useEffect(() => {
    getGame();
    getPackages();
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//www.tickcounter.com/static/js/loader.js';
    const parentElem = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
    parentElem.appendChild(script);

  }, []); // Call getGames() once when component mounts


    const formatDate = (date: Date): string =>{
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <a href="/#game-zone">
        <img src={back} id="back-img"></img>
        </a>
        
        <div className="layout">
          {game.map((val,key)=>{
              return(
                <div className="game-detail" key={key}>
                  <img src={val.icon} alt="" />
                  <div className="game-desc">
                    <h3>{val.gname}</h3>
                    <p>{val.gdesc}</p>
                  </div>
                  <div className="time">
                  <a
                      datatype="count-down"
                      data-name="Promotion end in:"
                      data-bg_color="#FFFFFF"
                      data-name_color="#008922"
                      data-border_color="#888888"
                      data-units="hms"
                      data-dt={formatDate(new Date(new Date().getTime() + 2 * 60 * 60 * 1000))}
                      data-timezone="Asia/Bangkok"
                      style={{ display: 'block', width: '100%', position: 'relative', paddingBottom: '25%' }}
                      className="tickcounter"
                      href="//www.tickcounter.com"
                  >
                      Countdown
                  </a>
                  </div>
                  <div className="game-attr">
                    <p>Platform: {val.platform}</p>
                    <p>Genre: {val.genre}</p>
                    <p>Publisher: {val.publisher}</p>
                  </div>
                </div>
              )
            })}

          <div className="detail">
            <section className="package">
              <h6>Packages</h6>

              <div className="package-box">
                {packages.map((val,key)=>{
                return(
                      <div className="box" key={key}>
                        <input name="package" type="radio"></input>
                        <div className="box-detail">
                          <p className="coin">{val.point} {val.unit}</p>
                          <p className="thb">{val.price} THB</p>
                          <label></label>
                        </div>
                      </div>
                )
                })}

              </div>
            </section>

            <section>
              <h6>Your E-mail</h6>
              <input type="email" placeholder="Insert your email"></input>
            </section>

            <section>
              <h6>Your Game ID / Name</h6>
              <input
                type="text"
                placeholder="Insert your game ID or name"
              ></input>
            </section>

            <section>
              <h6>Discount / Coupon</h6>
              <input
                type="text"
                placeholder="Insert discount or coupon code (if any)"
              ></input>
            </section>

            <section className="payment-method">
              <h6>Payment</h6>

              <div className="method-container">
                <div className="method">
                  <input id="credit" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={credit}></img>
                    <label htmlFor="credit">VISA / Mastercard</label>
                  </div>
                </div>

                <div className="method">
                  <input id="mobile" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={mobile}></img>
                    <label htmlFor="mobile">Mobile Banking</label>
                  </div>
                </div>

                <div className="method">
                  <input id="pp" name="payment" type="radio"></input>
                  <div className="method-icon">
                    <img src={pp}></img>
                    <label htmlFor="pp">PromptPay</label>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <button type="button" className="confirm">
            <a href="/payment-success">Confirm</a>
          </button>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GameDet;
