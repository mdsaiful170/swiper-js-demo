import "boxicons";
import 'remixicon/fonts/remixicon.css'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nabar from "./component/Nabar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Nabar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
