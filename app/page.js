import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Discover from "@/components/DiscoverAside";
import leftBtn from "@/public/image/button-left.png";
import rightBtn from "@/public/image/button-right.png";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 flex flex-col items-center justify-center gap-1 flex-wrap">
      <Header />
      <Discover icon={ leftBtn } position={"left"} />
      <span className="home__span max-w-[680px] text-[90px] text-center font-light leading-[120px]">Sophisticated skincare</span>
      <Discover icon={ rightBtn } position={"right"} side="-translate-4" /> 
      <Footer /> 
    </div>
  );
}
