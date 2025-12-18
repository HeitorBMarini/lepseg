import AboutHome from "./components/AboutHome";
import Banner from "./components/Banner";
import Cta from "./components/Cta";
import Escolher from "./components/Escolher";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Mvv from "./components/Mvv";
import NossoProcesso from "./components/NossoProcesso";
import StatsBigNumbers from "./components/StatsBigNumbers";
import Testimonal from "./components/Testimonal";
import TreinamentosCarousel from "./components/TreinamentosCarousel";
import YoutubeSection from "./components/YoutubeSection";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <StatsBigNumbers />
      <AboutHome />
      <Mvv/>
      <NossoProcesso/>
      <Escolher/>
      <TreinamentosCarousel/>
      <Testimonal/>
      <GallerySection/>
      <YoutubeSection/>
      <Cta/>
      <Footer/>
    </>
  );
}
