import Link from "next/link";
import "../styles/navbar.css";
import Image from "next/image";
import logo from "../../public/images/logo/APSIDEU_LOGO_WHITE.png";

// import ApsideuLogo from '@/app/images/logo';

interface Scrollable {
  scrollable: string;
}

export default function Navbar(props: Scrollable) {
  return (
    // console.log({`nav-container ${props}`})
    <div className={`nav-container ${props}`}>
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
