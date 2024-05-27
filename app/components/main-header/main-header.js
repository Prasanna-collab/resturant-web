import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLinks from "./nav-link";
const Header = () => {
  return (
    <>
       <MainHeaderBackground/>
       <header className={classes.header}>
      <Link className={classes.logo} href="/">
      <Image src={logoImg} priority={true} alt="A Plate with food on it" />
          NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
        <li>
        <NavLinks href="/meals">Browse Meals</NavLinks>
        </li>
        <li>
        <NavLinks href="/community">Community</NavLinks>
        </li>
        </ul>
      </nav>
    </header>
    </>
  
  );
};

export default Header;
