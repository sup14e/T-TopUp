import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import back from "../assets/Misc/back.png";
import "./AdvSearch.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function AdvSearch() {

  const [search,setSearch] = useState({
    search_type:"name",
    query:""
  });

  const navigate = useNavigate();

  const handleChange = (e:any)=>{
    setSearch((prev)=>({...prev, [e.target.name] : e.target.value}))
  }

  const handleSearch = ()=>{
    navigate(`/search-result/?type=${search.search_type}&query=${search.query}`);
  }

  console.log(search.query);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="search-container">
          <h1>Advanced Search</h1>
          <img src={back}></img>

          <form className="search-input" action="" method="">
            <div className="search-content">

              <div className="search-choice">
                <select name="search_type" onChange={handleChange}>
                  <option value="name">Game Name</option>
                  <option value="genre">Genre</option>
                  <option value="platform">Platform</option>
                  <option value="publisher">Publisher</option>
                </select>
                <input type="text" name="query" onChange={handleChange} required/>
              </div>

              <br></br>
              <br></br>
              <div className="button-container">
                  <button type="submit" className="searchbutton" onClick={handleSearch}>SEARCH</button>
                  <button className="clearbutton">CLEAR</button>
              </div>
            </div>
          </form>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AdvSearch;
