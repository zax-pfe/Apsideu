import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import HomeImageDorian from "../../public/images/catalogue/Nuit/heroImage.jpg";
import HomeImageMiss from "../../public/images/home/HomeImage1.jpg";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <div>
      <Hero imgData={HomeImageMiss} />
    </div>
  );
}
