"use client";
import {
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  Navbar,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

import Logo from "@/assets/imgs/Logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products#product-listing",
    },
    {
      name: "Our Projects",
      link: "/projects",
    },
  ];

  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="py-3 bg-secondary z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <img src={Logo} className="object-center object-cover w-50" />
          <NavItems className="text-secondary-foreground" items={navItems} />
          <NavbarButton className="cursor-pointer font-montserrat" variant="primary" onClick={() => navigate("/contact")}>Get In Touch</NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <img src={Logo} className="object-center object-cover w-35" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link to={"/contact"}>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Get In Touch
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}