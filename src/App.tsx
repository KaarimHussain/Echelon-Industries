import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "@/views/Home"
import Footer from "./components/Footer"
// import Products from "./views/OldProducts"
import CompanyProfile from "./views/Company-Profile"
import Products from "./views/Products"
import AboutUs from "./views/AboutUs"
import OurBrandsAndPartners from "./views/OurBrandsAndPartners"
import OurProjects from "./views/OurProjects"
import ContactUsPage from "./views/ContactUs"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "./components/NavbarMenu"

// ScrollToTop component using location hook
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/old-products" element={<Products />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/brands" element={<OurBrandsAndPartners />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<ContactUsPage />} />
        {/* Pending - Needs conformation */}
        <Route path="/company-profile" element={<CompanyProfile />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
