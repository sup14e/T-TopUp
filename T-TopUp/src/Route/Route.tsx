import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus";
import Homepage from "../Homepage/Homepage";
import ProdMng from "../ProdMng/ProdMng";
import AddADMIN from "../AddAdmin/AddADMIN";
import UserManagement from "../UserManagement/UserManagement";
import EditADMIN from "../EditAdmin/EditADMIN";
import PaymentSuccessful from "../PaymentSuccess/PaymentSuccessful";
import LogIn from "../Login/LogIn";
import App from "../App";
import AdvSearch from "../AdvSearch/AdvSearch";
import SearchResult from "../SearchResult/SearchResult";
import GameDet from "../GameDet/GameDet";
import AddGame from "../AddGame/AddGame";
import EditGame from "../EditGame/EditGame";
import { useState } from "react";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "about-us", element: <Aboutus /> },
      { path: "product-management", element: <ProdMng /> },
      { path: "add-admin", element: <AddADMIN /> },
      { path: "admin-management", element:  <UserManagement />} ,
      { path: "edit-admin/:username", element: <EditADMIN /> },
      { path: "game-detail/:gameName", element: <GameDet/> },
      { path: "payment-success", element: <PaymentSuccessful /> },
      { path: "log-in", element: <LogIn /> },
      { path: "advanced-search", element: <AdvSearch /> },
      { path: "search-result", element: <SearchResult /> },
      { path: "add-game", element: <AddGame /> },
      { path: "edit-game/:gamename", element: <EditGame /> },

    ],
  },
]);
