import "../styles/info.css";
import Image from "next/image";
import infoImage from "../../public/images/info/_MG_0870.jpg";

export default function Info() {
  return (
    <div className="info-container">
      <Image
        className="image-info"
        src={infoImage}
        alt="Maxou le bg photographiant un boug"
      />
      <div className="info-text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        </p>
        <p>
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis
        </p>
      </div>
    </div>
  );
}
