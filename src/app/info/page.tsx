import Image from "next/image";
import Link from "next/link";
import Background from "@/components/background";
import Navbar from "@/components/navbar";
import Info from "@/components/info";

export default async function About() {
  return (
    <div>
      <Background>
        <Navbar />
        <Info />
      </Background>
    </div>
  );
}
