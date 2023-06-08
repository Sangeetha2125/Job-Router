import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"

function RootLayout(){
    return  <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
}

export default RootLayout