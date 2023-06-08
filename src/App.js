import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import CareerLayout from "./layouts/CareerLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import { careersloader } from "./layouts/CareerLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careersloader} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App