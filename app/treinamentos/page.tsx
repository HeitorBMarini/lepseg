import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import EscolherNew from "../components/a-lepseg/Escolher-new";
import NossoProcesso from "../components/NossoProcesso";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import TreinamentosGrid from "../components/treinamento/Treinamento-cards";

export default function Treinamentos() {
  return (
    <>
      <Header />
      <PageHeader
        title="Treinamentos"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Treinamentos" }]}
      />{" "}
      <TreinamentosGrid/>
      <NossoProcesso/>
      <EscolherNew/>
      <Cta/>
      <Footer/>
    </>
  );
}
