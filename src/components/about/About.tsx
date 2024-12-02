import "../../styles/about/about.css";
import Image from "next/image";
import AboutImage from "../../../public/images/about/contact_compressed.png";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-image-wrapper">
        <div className="about-header">
          <div className="about-bar" />
          <div className="about-title">
            <h1>ABOUT</h1>
          </div>
        </div>
        <div className="about-wrapper">
          <div className="about-content test">
            <h1>Name</h1>
            <p>
              s harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio,
              eaque rerum! Provident similique accusantium nemo autem.
              Veritatisobcaecati tenetur iure eius earum ut molestias archit
            </p>
          </div>
        </div>
        <Image src={AboutImage} alt="maxou de dos" fill={true} />
      </div>
    </div>
  );
}
