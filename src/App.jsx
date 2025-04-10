import "./App.css";
// import { motion } from "framer-motion";
import Navbar from "./component/Navbar";
import NavgatingContainer from "./component/NavigationContainer";
import Description from "./component/Description";
import StarCanvas from "./component/StarBackground";
import Form from "./component/Form";
import { useState } from "react";
// import DescriptionContainer from "./component/DescriptionContainer";
function App() {
  const [changebackground, setbackground] = useState(true);
  console.log(changebackground);
  return (
    <>
      <Navbar
        setbackground={setbackground}
        changebackground={changebackground}
      ></Navbar>
      <NavgatingContainer changebackground={changebackground} />

      <Description changebackground={changebackground}/>
      <Form changebackground={changebackground}></Form>
      <StarCanvas />
      {/* <Description />
      <Description />
      <Description /> */}
    </>
  );
}

export default App;
