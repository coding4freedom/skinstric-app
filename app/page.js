import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 flex flex-col items-center justify-center gap-1 flex-wrap">
      <Header />
      <span className="home__span max-w-[680px] text-[90px] text-center font-light leading-[120px]">Sophisticated skincare</span> 
      <Footer /> 
    </div>
  );
}
