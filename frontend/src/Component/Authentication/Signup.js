// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, position, useToast, VStack } from '@chakra-ui/react'
// import React, { useState } from'react'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom'

// const Signup=()=>{

//     const [show,setShow]=useState(false)
//     const[name,setName]=useState()
//     const[email,setEmail]=useState()
//     const[confirmpassword,setConfirmpassword]=useState()
//     const[password,setPassword]=useState()
//     const[loading,setLoading]=useState(false);
//     const toast=useToast();
//     const navigate=useNavigate();
//     // const[pic,setPic]=useState()


//     const handleClick=()=>setShow(!show);

//     // const postDetails=(pics)=>{};


//     const submitHandler=async()=>{
//         setLoading(true);
//         if(!name || !email ||!password ||!confirmpassword){
//             toast({
//                 title:"Please Fill all the details",
//                 status:"warning",
//                 duration:5000,
//                 isClosable:true,
//                 position:"bottom",
//             });
//             setLoading(false);
//             return;
//         }
//         if(password!==confirmpassword){
//             toast({
//                 title:"Passwords doesn't matched",
//                 status:"warning",
//                 duration:2000,
//                 isClosable:true,
//                 position:"bottom"
//             });
//             setLoading(false);
//             return ;
//         }

//         try{
//             const config={
//                 headers:{
//                     "Content-type":"application/json",
//                 }
//             };
//             const{data}=await axios.post(
//                 // "/api/user",
//                 {name,email,password},config);
//             toast({
//                 title:"Registration Successful",
//                 status:"success",
//                 duration:5000,
//                 isClosable:true,
//                 position:"bottom",
//             });

//             localStorage.setItem('userInfo',JSON.stringify(data));
//             setLoading(false);
//             navigate("/chat");

//         }
//         catch(error){
//             console.log("Axios Error:", error);
//             toast({
//                 title:"Error occured",
//                 description:error.response.data.message,
//                 status:"error",
//                 duration:5000,
//                 isClosable:true,
//                 position:"bottom",
//             });
//             setLoading(false)
//         }
//     };
//     return( 
//          <VStack spacing='2px' color={'black'}>
//             <FormControl id='first-name' isRequired>
//                 <FormLabel>Name</FormLabel>
//                 <Input
//                 placeholder='Enter Your Name'
//                 onChange={(e)=>setName(e.target.value)}
//                 />
//             </FormControl>
//             <FormControl id='email' isRequired>
//                 <FormLabel>E-mail</FormLabel>
//                 <Input
//                 placeholder='Enter Your E-mail'
//                 onChange={(e)=>setEmail(e.target.value)}
//                 />
//             </FormControl>
//             <FormControl id='password' isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                 <Input
//                 type={show?"text":'password'}
//                 placeholder='Enter Password'
//                 onChange={(e)=>setPassword(e.target.value)}
//                 />
//                 <InputRightElement width="4.Srem">
//                     <Button h="1.75rem" size="sm" onClick={handleClick}>
//                         {show ?"Hide":"Show"}
//                     </Button>
//                     </InputRightElement>
//                 </InputGroup>
//             </FormControl>
//             <FormControl id='confirm-password' isRequired>
//                 <FormLabel>Confirm Password</FormLabel>
//                 <InputGroup>
//                 <Input
//                 type={show?"text":'password'}
//                 placeholder='Enter Password'
//                 onChange={(e)=>setConfirmpassword(e.target.value)}
//                 />
//                 <InputRightElement width="4.5rem">
//                     <Button h="1.75rem" size="sm" onClick={handleClick}>
//                         {show ?"Hide":"Show"}
//                     </Button>
//                     </InputRightElement>
//                 </InputGroup>
//             </FormControl>
//             {/* <FormControl id="pic">
//                 <FormLabel>Upload your picture</FormLabel>
//                 <Input 
//                 type='file'
//                 p={.5}
//                 accept='image/*'
//                 onChange={(e)=>postDetails(e.target.file[0])}
//                 ></Input>
//             </FormControl> */}

//             <Button 
//             colorScheme='blue'
//             width="100%"
//             style={{marginTop:15}}
//             onClick={submitHandler}
//             >
//                 Sign Up
//             </Button>
//         </VStack>
//     );
// }
// export default Signup


import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {
    setLoading(true);

    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the details",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Passwords do not match",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    const userData = {
      name,
      email,
      password, // (mock only – backend will hash later)
    };

    localStorage.setItem("userInfo", JSON.stringify(userData));

    toast({
      title: "Signup Successful",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });

    setLoading(false);
    navigate("/login");
  };

  return (
    <VStack spacing="10px" color="black">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        mt={3}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;

