import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"
import Breadcrumbs from "../components/Breadcrumbs"

function RootLayout(){
    return  <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
}

export default RootLayout