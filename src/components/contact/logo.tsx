import logo_apsideu from "../../../public/images/logo/APSIDEU_LOGO_WHITE.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={logo_apsideu} alt="logo apsideu" fill={true}></Image>
    </div>
  );
}
