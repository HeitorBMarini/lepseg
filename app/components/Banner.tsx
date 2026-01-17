"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroBanner() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[90vh] md:h-[118vh]
        pt-24 md:pt-0
      "
    >
      {/* ==== IMAGEM MOBILE ==== */}
      <Image
        src="/imgs/banner-mobile.png"
        alt="Banner Mobile"
        fill
        priority
        className="object-cover object-top md:hidden"
      />

      {/* ==== IMAGEM DESKTOP ==== */}
      <Image
        src="/imgs/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover object-center hidden md:block"
      />

      {/* ==== TEXTO (MOBILE + DESKTOP) ==== */}
      <motion.div
        className="
          absolute
          top-[45%] sm:top-[60%] md:top-[44%]
          left-40 md:left-195
          right-auto md:right-[10%]
          -translate-x-1/2 md:translate-x-0
          -translate-y-1/2
          md:text-left
          text-white
          max-w-[110%] sm:max-w-[80%] md:max-w-185
          z-20
        "
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.h2
          className="text-3xl sm:text-3xl md:text-3xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          SEGURANÇA QUE TRANSFORMA AMBIENTES
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-1xl leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
        >
          Treinamentos profissionais para proteger vidas{" "}
          <br className="hidden md:block" />
          e elevar o padrão de segurança da sua{" "}
          <br className="hidden md:block" />
          empresa.
        </motion.p>
      </motion.div>
    </section>
  );
}
