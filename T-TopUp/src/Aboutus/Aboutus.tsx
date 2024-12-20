import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import jui from "../assets/About_Us/jui.png";
import mac from "../assets/About_Us/mac.png"
import thames from "../assets/About_Us/thames.png"
import term from "../assets/About_Us/term.png"
import pran from "../assets/About_Us/pran.png"
import "./Aboutus.css";

function Aboutus() {
  return (
    <>
      <header>
        <NavBar />
      </header>
    <body className="mb-20">
        <div>
          <p className="TeamMem">Our Team Members</p>
        </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="grid-container">

            <div className="column">
              <div className="Picadjust">
                <img className="PicFrame" src={term}></img>
              </div>
              <p className="NameTeamM">Term</p>
              <div className="PersonName">
                <p className="GapName">Phusit</p>
                <p className="GapName">Mongkhonwatcharaphun</p>
              </div>

              <div>
                <p className="GapEmail">phusit.mon@student.mahidol.ac.th</p>
                <p className="GapNum">6588059</p>
              </div>
            </div>
    
            <div className="column">
              <div className="Picadjust">
                <img className="PicFrame" src={thames}></img>
              </div>

              <p className="NameTeamM">Thame</p>
              <div className="PersonName">
                <p className="GapName">Vichayuth</p>
                <p className="GapName">Ngamsitthipong</p>
              </div>

              <div>
                <p className="GapEmail">vichayuth.nga@student.mahidol.ac.th</p>
                <p className="GapNum">6588061</p>
              </div>
            </div>
    
            <div className="column">
              <div className="Picadjust">
                <img className="PicFrame" src={mac}></img>
              </div>

              <p className="NameTeamM">Mac</p>
              <div className="PersonName">
                <p className="GapName">Wasuntha</p>
                <p className="GapName">Phanpanich</p>
              </div>

              <div>
                <p className="GapEmail">wasuntha.pha@student.mahidol.ac.th</p>
                <p className="GapNum">6588068</p>
              </div>
            </div>
    
            <div className="column">
              <div className="Picadjust">
                <img className="PicFrame" src={jui}></img>
              </div>

              <p className="NameTeamM">Jui</p>
              <div className="PersonName">
                <p className="GapName">Sorawit</p>
                <p className="GapName">Piriyapanyaporn </p>
              </div>

              <div>
                <p className="GapEmail">sorawit.pir@student.mahidol.ac.th</p>
                <p className="GapNum">6588075</p>
              </div>
            </div>
    
            <div className="column">
              <div className="Picadjust">
                <img className="PicFrame" src={pran}></img>
              </div>

              <div>
                <p className="NameTeamM">Pran</p>
                <div className="PersonName">
                  <p className="GapName">Punnathorn</p>
                  <p className="GapName">Laohachote</p>
                </div>

                <div>
                  <p className="GapEmail">
                    punnathorn.lao@student.mahidol.ac.th
                  </p>
                  <p className="GapNum">6588179</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

      <Footer />
    </>
  );
}

export default Aboutus;
