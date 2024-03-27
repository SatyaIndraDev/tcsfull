




// import "./Dashboard.css";

import { Update } from "./Update";

import Product from "./Adminproductdata";
import { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";

export const AdminPage = () => {
  const [ren, setRen] = useState(false);

  // useEffect(()=>{

  // },[ren])

  return (
    <div>
      {/* <Navbar /> */}
    <div style={{ backgroundColor: "#F1F8E9" ,marginTop:"120px "}}>
      <h1 style={{ textAlign: "left", marginLeft: "20px",fontSize:"20px",color:"green"  }}>Hello Admin</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px",
        }}
      >
       

       

        
      </div>

      
      <Update setRen={setRen} ren={ren} />
      <Product setRen={setRen} ren={ren} />
    </div>
    </div>
  );
};

