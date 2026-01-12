import { Outlet } from "react-router-dom"
// import { Home } from "../pages/home"
// import { About } from "../pages/about"
import { Navbar } from "../components/navbar"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{marginTop:"10vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

