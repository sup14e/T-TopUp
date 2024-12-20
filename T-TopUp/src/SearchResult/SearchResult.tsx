import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./SearchResult.css";
import "../ProdMng/ProdMng.css";
import { useLocation, useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

function SearchResult() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const type = searchParams.get('type');
  const query = searchParams.get('query');

  const search_query = useParams().squery;

  console.log(search_query)
  
  const [search,setSearch] = useState([]);

  const getSearch = () => {
    Axios.get(`http://localhost:8119/search/?type=${type}&query=${query}`)
      .then((response:any) => {
        setSearch(response.data);
        console.log(response.data);
      })
      .catch((error:any) => {
        console.error('Error fetching search query:', error);
      });
  };

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <div className="filter-content">
          <h1>Search Results by "{type}" for "{query}"</h1>
          <hr></hr>


          <p className="found">{search.length} Games Found: </p>
        </div>
        

        <div className="game-found">
          <div className="game-container">
            {search.map((val)=>{
              return(
                <div className="game">
                  <div className="iconArea">
                    <a href={`/game-detail/${val.gname}`}>
                      <img className="g-icon" src={val.icon}></img>
                    </a>
                  </div>
                  <p>{val.gname}</p>
                </div>
              )
            })}
          </div>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SearchResult;
