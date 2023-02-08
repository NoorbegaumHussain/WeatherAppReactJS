// attendence management system
//BrowserRouter or Router wraps all the routes
//Route helps u to display any comp based url
//link helps u to link file as same as a tag
//Switch stops matching al urls
//react router dom is the latest version which is same as previous version i.e react router
//
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //this is the way of importing router and Browserrouter can also be written as router
// import AuthenticationPage from "../pages/AuthenticationPage";
// import LoginPage from "../pages/LoginPage";
// import Register from "../pages/Register";
// function Navigator() {
//   return (
//     //returimg a react fragment
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<AuthenticationPage />}>
//             <Route index path="/login" component={<LoginPage/>} />
//             <Route exact path="/register" component={<Register/>} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default Navigator;

import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import FavouritesPage from "../pages/FavouritesPage";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/HomePage";
import RecentsPage from "../pages/RecentsPage";

export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/recents" element={<RecentsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
