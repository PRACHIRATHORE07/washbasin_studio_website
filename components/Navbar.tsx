"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, SetStateAction } from "react";
import HeadBox from "../public/HeadBox.png"

const Navbar = () => {
  const pathname = usePathname();


  const [dropdownMenu, setDropdownMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  // const [boxPosition, setBoxPosition] = useState({ top: 0, left: 0 });

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

  // useEffect(() => {
  //   const updateBoxPosition = () => {
  //     const activeLink = document.querySelector('.navbar-link.active');
  //     if (activeLink) {
  //       const { top, left } = activeLink.getBoundingClientRect();
  //       setBoxPosition({ top, left });
        
  //     }
  //   };

  //   updateBoxPosition();

  // }, [pathname, scrolled]);

  const onUpdateActiveLink = (value: SetStateAction<string>) => {
    setActiveLink(value);
  };

 

  
  return (
    <div className={`sticky top-0 z-10 py-4 px-10 flex justify-between items-center text-white bg-black max-sm:px-2 ${scrolled ? "scrolled" : ""}`}>
      <div className="mr-20">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={150} />
        </Link>
      </div>

      <div className="flex-1"></div> {/* Spacer */}

      <div className="flex gap-8 text-base max-lg:hidden mr-20">
        {/* HeadBox Image
      <span className={`absolute top-${boxPosition.top} left-${boxPosition.left} -translate-x-1/3 -translate-y-1/4 z-10 max-lg:hidden items-center bg-transparent ${scrolled ? "scrolled" : ""}`}>
        <Image src={HeadBox} alt="HeadBox" width={90} height={100}/>
      </span> */}
        <Link
          href="/"
          className={`hover:size-bold ${pathname === "/" ? "font-bold" : "font-normal"} ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}`}
          onClick={() => onUpdateActiveLink('home')}
        >
          Home
        </Link>
        <Link
          href="/sale"
          className={`hover:size-bold ${pathname === "/sale" ? "font-bold" : "font-normal"} ${activeLink === 'sale' ? 'active navbar-link' : 'navbar-link'}`}
          onClick={() => onUpdateActiveLink('sale')}
        >
          Sale
        </Link>
        <Link
          href="/cart"
          className={`hover:size-bold ${pathname === "/cart" ? "font-bold" : "font-normal"} ${activeLink === 'cart' ? 'active navbar-link' : 'navbar-link'}`}
          onClick={() => onUpdateActiveLink('cart')}
        >
          Cart
        </Link>
        <Link
          href="/about-us"
          className={`hover:size-bold ${pathname === "/about-us" ? "font-bold" : "font-normal"} ${activeLink === 'about-us' ? 'active navbar-link' : 'navbar-link'}`}
          onClick={() => onUpdateActiveLink('about-us')}
        >
          About Us
        </Link>
        <Link
          href="/inquiry"
          className={`hover:size-bold ${pathname === "/inquiry" ? "font-bold" : "font-normal"} ${activeLink === 'inquiry' ? 'active navbar-link' : 'navbar-link'}`}
          onClick={() => onUpdateActiveLink('inquiry')}
        >
          Inquiry
        </Link>
        
      </div>

      {/*search box*/}
      {/* <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-" />
        </button>
      </div> */}

      <div className="relative flex gap-3 items-center">
        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-red-1" onClick={() => onUpdateActiveLink('home')}>
              Home
            </Link>
            <Link href="/sale" className="hover:text-red-1" onClick={() => onUpdateActiveLink('sale')}>
              Sale
            </Link>
            <Link href="/cart" className="hover:text-red-1" onClick={() => onUpdateActiveLink('cart')}>
              Cart
            </Link>
            <Link href="/about-us" className="hover:text-red-1" onClick={() => onUpdateActiveLink('about-us')}>
              About Us
            </Link>
            <Link href="/inquiry" className="hover:text-red-1" onClick={() => onUpdateActiveLink('inquiry')}>
              Inquiry
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
