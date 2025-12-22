// app/mapa-do-site/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import PageHeader from "@/app/components/PageHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mapa do Site | Lord Tec",
};

export default function MapaDoSitePage() {
  return (
    <>
      <Header />

      <PageHeader
        title="Mapa do Site"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mapa do Site" },
        ]}
      />

      <main className="bg-[#2b2b2b]">
        <section className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
            Acesse aqui todas as nossas páginas
          </h2>

          <ul className="space-y-1 text-sm md:text-[15px] text-[#1a2f37]/90">
            {/* Home */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link href="/" className="hover:text-(--primary-color) transition  text-white">
                Home
              </Link>
            </li>

            {/* Quem Somos */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/a-lepseg"
                className="hover:text-(--primary-color) transition text-white"
              >
                A Lepseg
              </Link>
            </li>

            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/treinamentos"
                className="hover:text-(--primary-color) transition  text-white"
              >
                Treinamentos
              </Link>
            </li>

<li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/galeria"
                className="hover:text-(--primary-color) transition  text-white"
              >
                Galeria
              </Link>
            </li>
            {/* Contato */}
            <li className="pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['▸'] before:text-(--primary-color)">
              <Link
                href="/contato"
                className="hover:text-(--primary-color) transition  text-white"
              >
                Contato
              </Link>
            </li>

            
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  );
}
