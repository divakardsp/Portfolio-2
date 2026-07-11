import Footer from "@/components/Footer";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSection/>
        <RightSection/>
      </div>
    </>
  );
}
