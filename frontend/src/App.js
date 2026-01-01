// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//         Hello
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react"
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

// function App() {
//   return (
//     <div className="App">
//       <Homepage />
//       {/* <Chatpage /> Uncomment if needed */}
//     </div>
//   );
// }


// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
// import Homepage from "./Homepage";
// import Chatpage from "./Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
