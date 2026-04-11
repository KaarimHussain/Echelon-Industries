import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Home from "@/views/Home"
import Footer from "./components/Footer"
import CompanyProfile from "./views/Company-Profile"
import Products from "./views/Products"
import AboutUs from "./views/WhyChooseUs"
import OurBrandsAndPartners from "./views/OurBrandsAndPartners"
import OurProjects from "./views/OurProjects"
import ContactUsPage from "./views/ContactUs"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "./components/NavbarMenu"
import PageTransition from "./components/PageTransition"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/brands" element={<PageTransition><OurBrandsAndPartners /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><OurProjects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUsPage /></PageTransition>} />
        <Route path="/company-profile" element={<PageTransition><CompanyProfile /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
