import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Contact from "@/components/contact";

export default async function ContactPage() {
  return (
    <div>
      <Background>
        <Navbar />
        <Contact />
      </Background>
    </div>
  );
}
