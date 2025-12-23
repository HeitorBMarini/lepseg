"use client";

import Link from "next/link";
import Image from "next/image";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = { label: string; href?: string };

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Crumb[];
  subtitle?: string;
}

export default function PageHeader({ title, breadcrumbs, subtitle }: PageHeaderProps) {
  const crumbs: Crumb[] =
    breadcrumbs && breadcrumbs.length
      ? breadcrumbs
      : [{ label: "Home", href: "/" }, { label: title }];

  return (
    <section className="relative w-full overflow-hidden">
      {/* BG (sua imagem já tem gradient) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/bread.webp"
          alt="Fundo da página interna"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* altura igual hero do print */}
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-14 md:pt-44 md:pb-20">
        {/* topo com logo (igual print) */}
        
        {/* breadcrumb (igual print: Home > pill amarelo) */}
        <div className="mt-10">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2 text-xs text-white/90">
              {crumbs.map((c, i) => {
                const isFirst = i === 0;
                const isLast = i === crumbs.length - 1;

                return (
                  <div key={c.label + i} className="flex items-center gap-2">
                    <BreadcrumbItem>
                      {isLast || !c.href ? (
                        <BreadcrumbPage
                          className="
                            inline-flex items-center
                            rounded-full bg-(--primary-color)
                            px-3 py-1
                            font-semibold text-black
                          "
                        >
                          {c.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={c.href}
                            className="inline-flex items-center gap-2 hover:text-(--primary-color) transition-colors"
                          >
                            {isFirst && <HomeIcon size={14} />}
                            <span>{c.label}</span>
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>

                    {!isLast && (
                      <BreadcrumbSeparator>
                        <ChevronRight size={14} className="text-white/70" />
                      </BreadcrumbSeparator>
                    )}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* título (grande e branco como no print) */}
        <h1 className="mt-4 text-3xl md:text-5xl uppercase font-medium tracking-wide text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm md:text-base text-white/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
