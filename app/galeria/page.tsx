import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

import Cta from "../components/Cta";
import Footer from "../components/Footer";
import GaleriaSection from "../components/galeria/Galeria";
import EscolherNew from "../components/a-lepseg/Escolher-new";


export default function Galeria() {
  return (
    <>
      <Header />
      <PageHeader
        title="Galeria"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Galeria" }]}
      />{" "}
      <GaleriaSection/>
      <EscolherNew/>
      <Cta/>
      <Footer/>
    </>
  );
}
