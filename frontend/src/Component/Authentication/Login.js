// // import React from'react'
// import React, { useState } from'react'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom'
// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, position, useToast, VStack } from '@chakra-ui/react'


// const Login=()=>{
    
//         const [show,setShow]=useState(false)
//         const[name,setName]=useState()
//         const[email,setEmail]=useState()
//         const[password,setPassword]=useState()
//         const[loading,setLoading]=useState(false);
//         const toast=useToast();
//         const navigate=useNavigate();
    
//         const handleClick=()=>setShow(!show);
    
//         const submitHandler=async()=>{
//             setLoading(true);
//             if(!email || !password){
//                 toast({
//                     title:"Please fill all the details",
//                     status:"warning",
//                     duration:5000,
//                     isClosable:true,
//                     position:"bottom"
//                 });
//                 setLoading(false);
//                 return;
//             }
//             try{
//                 const config={
//                     headers:{
//                         "Content-type":"application/json",
//                     },
//                 };
//                 const {data}=await axios.post(
//                     // "/api/user/login",
//                     {email,password},
//                     config
//                 );
//                 toast({
//                 title:"Registration Successful",
//                 status:"success",
//                 duration:5000,
//                 isClosable:true,
//                 position:"bottom",                    
//                 });
//                 localStorage.setItem("userInfo",JSON.stringify(data));
//                 setLoading(false);
//                 navigate("/chats");
//                 }
//                 catch(error){
//                 toast({
//                     title:"Error occured",
//                     description:error.response.data.message,
//                     status:"error",
//                     duration:5000,
//                     isClosable:true,
//                     position:"bottom",
//                 });
//                 setLoading(false);
//             }
//         };
//     return( 
//         <VStack spacing='2px' color={'black'}>
//            <FormControl id='first-name' isRequired>
//                <FormLabel>Name</FormLabel>
//                <Input
//                placeholder='Enter Your Name'
//                onChange={(e)=>setName(e.target.value)}
//                />
//            </FormControl>
//            <FormControl id='email' isRequired>
//                <FormLabel>E-mail</FormLabel>
//                <Input
//                placeholder='Enter Your E-mail'
//                onChange={(e)=>setEmail(e.target.value)}
//                />
//            </FormControl>
//            <FormControl id='password' isRequired>
//                <FormLabel>Password</FormLabel>
//                <InputGroup>
//                <Input
//                type={show?"text":'password'}
//                placeholder='Enter Password'
//                onChange={(e)=>setPassword(e.target.value)}
//                />
//                <InputRightElement width="4.Srem">
//                    <Button h="1.75rem" size="sm" onClick={handleClick}>
//                        {show ?"Hide":"Show"}
//                    </Button>
//                    </InputRightElement>
//                </InputGroup>
//            </FormControl>
           
           

//            <Button 
//            colorScheme='blue'
//            width="100%"
//            style={{marginTop:15}}
//            onClick={submitHandler}
//            isLoading={loading}
//            >
//                Login
//            </Button>
//            <Button 
//            variant="solid"
//            colorScheme='red'
//            width="100%"
//            onClick={()=>
//            {
//             setName("Sample")
//             setEmail("sample@example.com");
//             setPassword("12345678");
//            }
//            }
//            >
//                Get Sample User Credentials
//            </Button>
//        </VStack>
//    );
// }
// export default Login



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

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {
    setLoading(true);

    if (!email || !password) {
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

    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (!storedUser) {
      toast({
        title: "No account found",
        description: "Please sign up first",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });

      setLoading(false);
      navigate("/chats");
    } else {
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px" color="black">
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

      <Button
        colorScheme="blue"
        width="100%"
        mt={3}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;

