import Link from "next/link";
import "../styles/navbar.css";
import Image from "next/image";
import logo from "../../public/images/logo/APSIDEU_LOGO_WHITE.png";

// import ApsideuLogo from '@/app/images/logo';

export default function Navbar() {
  return (
    <div className="nav-container">
      <Link className="nav-item" href="/info">
        Info
      </Link>
      <Link className="nav-item" href="/catalogue">
        Catalogue
      </Link>
      <Link href="/">
        <Image className="logo" src={logo} alt="logo maxou" />
      </Link>
      <Link className="nav-item" href="/blog">
        Blog
      </Link>
      <Link className="nav-item" href="/contact">
        Contact
      </Link>
    </div>
  );
}
