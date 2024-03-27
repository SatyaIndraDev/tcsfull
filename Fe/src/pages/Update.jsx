import { Box,Button,Input ,Center} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatedata } from '../Redux/Admin/actions'

const initialdata={
  first_name: "",
  last_name: "",
     email: "",
     department: "",
     salary: ""


}

export const Update=({setRen})=>{

   const [data,setData]=useState(initialdata)
   const dispatch=useDispatch()
   const handlechange=(e)=>{
const {name,value}=e.target
setData((pre)=>({...pre,[name]:value}))
   }
   const ourdata=useSelector((state)=>state.update.isLoading)
   console.log(ourdata)
   // console.log(data)
   const handlesubmit=(e)=>{
      e.preventDefault()
      const {id,desc,image,name,price}=data
      if(id&&desc&&image&&name&&price){
          dispatch(updatedata(id,data,setRen))
          setData(initialdata)
      }

else{
  alert ("Ohh! you are not providing complete data")
}
  }


    return <div>

     
       <h1 style={{textAlign:"center" ,fontSize:"20px" ,color:"orange",marginTop:"30px"}}>Update Your Products</h1>
       <Box>
    <Box mt="50px">
    <Center>
<form onSubmit={handlesubmit}>
    <Box >

    <Input  value={data.id} onChange={handlechange} name="id"  type="number"  textAlign="center" placeholder="Please Enter Id here" mt="10px" h="30px" w="300px"/>

    <br />
        <Input  value={data.first_name} onChange={handlechange} name="first_name"  type="text"  textAlign="center" placeholder="first_name " mt="10px" h="30px" w="300px"/>

        <br />

        <Input value={data.last_name} onChange={handlechange}  name="last_name" type="text"   textAlign="center" placeholder="last_name" mt="10px" h="30px" w="300px"/>
       
        <br />

        <Input value={data.email} onChange={handlechange}  name="email" type="email"   textAlign="center" placeholder="email" mt="10px" h="30px" w="300px"/>
       
       <br />

        <Input value={data.department}  onChange={handlechange} name="department"  type="text" textAlign="center" placeholder="department" mt="10px" h="30px" w="300px"/>
       
        <br />
        <Input value={data.salary} onChange={handlechange}  name="salary"   type="number" textAlign="center" placeholder="salary" mt="10px" h="30px" w="300px"/>
      
        
     
      </Box>
{ourdata===false?<Button   width="150px" mt="10px" bg="#8BC34A" marginLeft="80px" textAlign="center" type="submti">
    
    
    
    UPDATE</Button>
    :
    
    
    <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
    mt="10px" width="150px" marginLeft="80px"  textAlign="center"
  >
    UPDATE 
  </Button>
    
    }
</form>
</Center>
</Box>
</Box>

    </div>
   } 