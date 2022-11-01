import Footer from "./component/Footer";
import Header from "./component/Header";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Services from "./component/Services";
import Home from "./component/Home";
import Certificate from "./component/Certificate";
import Resources from "./component/Resources";
function App() {
  return (
    <>
      <div className="mx-auto container">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Certificate" element={<Certificate />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
