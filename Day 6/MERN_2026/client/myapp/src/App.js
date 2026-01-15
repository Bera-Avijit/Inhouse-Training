import "./App.css";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Registration } from "./pages/registration";
import { Login } from "./pages/login";
// import { Footer } from "./components/footer";
// import { Navbar } from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/defaultLayout";
import { Error } from "./pages/error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
