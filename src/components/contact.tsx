import "../styles/contact.css";
import Image from "next/image";
import logo from "../../public/images/logo/APSIDEU_LOGO_WHITE_CONTACT.png";
import instagramLogo from "../../public/images/logo/instagram_logo.png";
import linkedinLogo from "../../public/images/logo/linkedin_logo.png";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="info-contact-container">
        <p>+33 6 44 23 73 35</p>
        <p>apsideproduction@gmail.com</p>
      </div>
      <div className="contact-container">
        <Link href="https://www.instagram.com/maxime.despiau/">
          <Image
            className="icon instagram"
            src={instagramLogo}
            alt="instagram logo"
          />
        </Link>

        <Image className="icon main" src={logo} alt="logo maxou" />
        <Link href="https://www.linkedin.com/in/maxime-despiau-355991229/">
          <Image
            className="icon linkedin"
            src={linkedinLogo}
            alt="linkedin logo"
          />
        </Link>
      </div>
    </div>
  );
}
