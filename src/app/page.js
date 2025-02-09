import Header from "./components/Header";
import HeroSection from "./components/About";
import Baner from "./components/Baner";
import Footer from "./components/Footer";
import PopularList from "./components/Popular";
import Salle from "./components/Salle";
import Rating from "./components/Rating";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Baner />
      <HeroSection />
      <PopularList />
      <Salle />
      <Rating />
      <Footer />
    </div>
  );
}
