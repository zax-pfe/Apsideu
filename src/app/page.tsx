import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import HomeImage from "../../public/images/home/HomeImage1.jpg";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Hero imgData={HomeImage} imgAlt="jolie miss" />
    </div>
  );
}
