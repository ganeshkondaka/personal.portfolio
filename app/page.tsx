import { Dpcard } from "@/components/Dpcard";
import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BackgroundBeams></BackgroundBeams>
      <Dpcard></Dpcard>
    </div>
  )
}
