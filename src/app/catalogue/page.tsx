import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Gallery from "@/components/gallery";

export default async function Catalogue() {
  return (
    <div>
      <Background>
        <Navbar scrollable="scrollable" />
        <Gallery />
      </Background>
    </div>
  );
}
