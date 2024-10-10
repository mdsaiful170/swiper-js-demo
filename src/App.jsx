import "boxicons";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nabar from "./component/home/Nabar";
import Button from "./component/compobox/Button";
import { Headingtext } from "./component/compobox/Headingtext";
// import { Container } from "./component/compobox/Container";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="" element={<Nabar />}></Route>
          <Button />
        </Routes>
      </BrowserRouter> */}
      <Button className="bg-darktextcolor">Test Drive</Button>
      <Button className="bg-darkgreencolor">ok Drive</Button>
      <Headingtext gradient={"products"}>our</Headingtext>
    </>
  );
}

export default App;
