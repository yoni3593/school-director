
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SiginUp from "./pages/SiginUp";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

function App() {
  const [test, setTest] = useState(0)
  const add = () =>{
    setTest(test + 1) 
    setTest(test + 1) 
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= { <Login />} />
        <Route path="/siginUp" element= { <SiginUp />} />
      </Routes>
    </BrowserRouter>
//     <Container>
//     <div>{test}</div>
//     <Button onClick={() => add() }></Button>
// </Container>
  );

}

export default App;
