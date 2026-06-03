import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionI from "./components/SectionI";
import SectionII from "./components/SectionII";
import SectionIII from "./components/SectionIII";
import SectionIV from "./components/SectionIV";
import SectionV from "./components/SectionV";
import SectionVI from "./components/SectionVI";
import SectionVII from "./components/SectionVII";
import SectionVIII from "./components/SectionVIII";
import SectionIX from "./components/SectionIX";
import SectionX from "./components/SectionX";
import SectionXI from "./components/SectionXI";
import SectionXII from "./components/SectionXII";
import Takeaways from "./components/Takeaways";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

export default function Page() {
  return (
    <>
      <CursorTrail />
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <SectionI />
        <SectionII />
        <SectionIII />
        <SectionIV />
        <SectionV />
        <SectionVI />
        <SectionVII />
        <SectionVIII />
        <SectionIX />
        <SectionX />
        <SectionXI />
        <SectionXII />
        <Takeaways />
      </main>
      <Footer />
    </>
  );
}
