import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Shop" element={<Shop />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} /> */}

      </Routes>
    </>
  );
}
export default App;