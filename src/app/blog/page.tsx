import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Background from "@/components/background";

export default async function Blog() {
  return (
    <div>
      <Background>
        <Navbar />
        Blog
      </Background>
    </div>
  );
}
