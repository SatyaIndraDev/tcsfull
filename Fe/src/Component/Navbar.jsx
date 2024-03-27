
import { FaShoppingCart} from "react-icons/fa";

import { Link } from "react-router-dom";

import { LuLogIn } from "react-icons/lu";
import { Box, HStack, Input } from "@chakra-ui/react";




function Navbar (){

const handleClick=()=>{

console.log("clicked")

}

  return (
   
    
<div style={{display:"flex", backgroundColor:"#FAFAFA"}}>

<Link to="/" >


</Link>
  <Link to="/" style={{padding:"40px"}}>
      <h3 data-testid="home-link">Home</h3>
    </Link>
 

   
  
   




   
  

    <Link to="/admin" style={{padding:"40px 0px"}}>
   <h1>Dashboard</h1>
    </Link>

 

    
   
    </div>


  )  
  
}

export default Navbar