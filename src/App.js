import { Route, Routes } from "react-router-dom";
import Navbar from "./components/subcomponents/Navbar";
import Homepage from "./components/pagecomponents/Homepage";
import SearchPage from "./components/pagecomponents/SearchPage";
import CourseDetails from "./components/pagecomponents/CourseDetails";



function App() {
  return (
    <>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/searchcourse/:input" element={<SearchPage/>} />
          <Route path="/searchcourse" element={<SearchPage/>} />
          <Route path="/coursedetails" element={<CourseDetails/>} />

        </Routes>
    </>
  );
}

export default App;
