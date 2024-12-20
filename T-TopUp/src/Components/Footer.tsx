import fb from "../assets/Misc/facebook.png";
import ig from "../assets/Misc/instagram.png";
import twt from "../assets/Misc/x.jpg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footerbar">
        <div className="circle-container">
          
          <div className="circle">
            <a href="https://www.facebook.com/photo/?fbid=1784085094969118&set=pob.100002453928010&locale=th_TH">
              <img src={fb}></img>              
            </a>
          </div>

          <div className="circle">
            <a href="https://www.instagram.com/p/CysztxKLSf9AZYTleelYxCVFEdD38-KFL8N4440/?img_index=5">
              <img src={ig}></img>              
            </a>
          </div>

          <div className="circle">
            <a href="https://twitter.com/LFC">
              <img src={twt}></img>
            </a>
          </div>
        </div>

        <div className="footer-text">
          <p>2024 Copyrights YuthPong co.</p>
          <a href="about-us" className="hover:border-b border-white-500">About us</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
