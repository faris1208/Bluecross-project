// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "../navbar/styles.module.scss";
// import logo from "../../../../public/assets/images/logo.svg";
// // import black from "../../../../public/assets/images/pinto_black_logo.svg";
// import menu from "../../../../public/assets/images/hamburger_white.svg";
// import exit from "../../../../public/assets/images/hamburger_black.svg";
// // import { CartIcon, SearchIcon } from "../icons/icons";

// interface NavLink {
//   path: string;
//   label: string;
//   targetSection?: string;
// }

// interface NavBarProps {
//   admin?: boolean;
// }

// const NavBar: React.FC<NavBarProps> = ({ admin = false }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks: NavLink[] = [
//     { path: "/", label: "Home", targetSection: "why-us" },
//     { path: "/product", label: "Product", targetSection: "about-us" },
//     { path: "/about-us", label: "About Us", targetSection: "property-listing" },
//     { path: "/deals", label: "Deals", targetSection: "faqs" },
//   ];

//   const handleScrollToSection = (sectionId?: string) => {
//     if (!sectionId) return;
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const handleScroll = useCallback(() => {
//     const hasScrolled = window.scrollY >= 510;
//     setIsScrolled(hasScrolled);
    
//     if (hasScrolled && !isMobileMenuOpen) {
//       setIsMobileMenuOpen(false);
//     }
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className={styles.wrapper}>
//       <nav
//         className={`${isScrolled ? styles.navbar_scrolled : styles.navbar} ${
//           admin ? styles.admin : ""
//         }`}
//         style={{ backgroundColor: admin ? "#000" : undefined }}
//       >
//         <div className={styles.logo_container}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Company Logo"
//               width={120}
//               height={40}
//               className={`${styles.logo} ${
//                 isScrolled ? styles.logo_black : styles.logo_white
//               }`}
//               priority
//             />
//           </Link>
//         </div>

//         <div className={styles.desktop_nav}>
//           <ul>
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <Link
//                   href={link.path}
//                   onClick={() => handleScrollToSection(link.targetSection)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className={styles.actions_container}>
//           <div className={styles.search_box}>
//             <input
//               type="text"
//               placeholder="Search"
//               className={styles.search_input}
//             />
//             <SearchIcon className={styles.search_icon} />
//           </div>
//           <CartIcon className={styles.cart_icon} />
//         </div>

//         <button
//           className={styles.mobile_menu_toggle}
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           <Image
//             src={isMobileMenuOpen ? exit : isScrolled ? menu : menu}
//             alt="Menu"
//             width={25}
//             height={25}
//           />
//         </button>

//         <div
//           className={`${styles.mobile_nav} ${
//             isMobileMenuOpen ? styles.mobile_nav_open : ""
//           }`}
//         >
//           <button
//             className={styles.mobile_nav_close}
//             onClick={toggleMobileMenu}
//             aria-label="Close menu"
//           >
//             <Image src={exit} alt="Close menu" width={30} height={30} />
//           </button>
          
//           <ul>
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <Link
//                   href={link.path}
//                   onClick={() => {
//                     handleScrollToSection(link.targetSection);
//                     toggleMobileMenu();
//                   }}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// 

// export default NavBar;