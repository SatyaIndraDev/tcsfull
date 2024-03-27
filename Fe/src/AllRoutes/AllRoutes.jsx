import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";






import { AdminPage } from "../pages/AdminPage";

function AllRoutes() {
  return (
    <Routes>

            <Route path = '/' element = {<Home />} />

           

           
          

            <Route path = '/admin' element = {<AdminPage />} />




          

    </Routes>
  );
}

export default AllRoutes;
