'use client'; // Add this directive at the very top

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, SetStateAction } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <div>
      <div
        className={`sticky top-0 z-10 py-4 px-10 flex justify-between items-center text-white bg-black max-sm:px-2 ${
          scrolled ? "bg-opacity-90" : ""
        }`}
      >
        <div className="mr-20">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={150} />
          </Link>
        </div>

        <div className="flex-1"></div>

        <div className="flex gap-8 text-base max-lg:hidden mr-20">
          {[
            { href: "/", label: "Home" },
            { href: "/sale", label: "Sale" },
            { href: "/cart", label: "Cart" },
            { href: "/about-us", label: "About Us" },
            { href: "/inquiry", label: "Inquiry" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-5 py-3 text-white bg-black rounded-full shadow-md transition-all duration-150 ease-linear hover:shadow-lg hover:bg-gray-100 hover:text-black ${
                pathname === href ? "font-bold" : "font-normal"
              } ${activeLink === href.replace("/", "") ? "active" : ""}`}
              onClick={() => onUpdateActiveLink(href.replace("/", ""))}
            >
              {label}
          
            </Link>
          ))}
        </div>

        <div className="relative flex gap-3 items-center">
          <Menu
            className="cursor-pointer lg:hidden"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />

          {dropdownMenu && (
            <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
              <Link href="/" onClick={() => onUpdateActiveLink("home")}>
                Home
              </Link>
              <Link href="/sale" onClick={() => onUpdateActiveLink("sale")}>
                Sale
              </Link>
              <Link href="/cart" onClick={() => onUpdateActiveLink("cart")}>
                Cart
              </Link>
              <Link
                href="/about-us"
                onClick={() => onUpdateActiveLink("about-us")}
              >
                About Us
              </Link>
              <Link href="/inquiry" onClick={() => onUpdateActiveLink("inquiry")}>
                Inquiry
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  text: string;
  active: boolean;
  onUpdateActiveLink: (value: SetStateAction<string>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, active, onUpdateActiveLink }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`relative px-4 py-2 transition-all duration-300 ${
          active ? 'text-gray-300 border-2 border-white rounded-full' : 'hover:border-2 hover:border-white hover:rounded-full'
        }`}
        onClick={() => onUpdateActiveLink(text.toLowerCase().replace(/\s/g, '-'))}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navbar;