import Header from "../components/Header";
import NumbersLepseg from "../components/a-lepseg/NumbersLepseg";
import PageHeader from "../components/PageHeader";
import QuemSomos from "../components/a-lepseg/QuemSomos";
import EscolherNew from "../components/a-lepseg/Escolher-new";
import Essencia from "../components/a-lepseg/Essencia";
import NossoProcesso from "../components/NossoProcesso";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Clientes from "../components/a-lepseg/Clientes";

export default function Alepseg() {
  return (
    <>
      <Header />
      <PageHeader
        title="A Lepseg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "A Lepseg" }]}
      />{" "}
      <NumbersLepseg />
      <QuemSomos/>
      <Essencia/>
      <NossoProcesso/>
      <EscolherNew/>
      <Clientes/>
      <Cta/>
      <Footer/>
    </>
  );
}
