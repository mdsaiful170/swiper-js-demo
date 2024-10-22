import "boxicons";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nabar from "./component/pages/Nabar";
import Home from "./component/Pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Nabar />}>
         
          <Route path="/"  element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
