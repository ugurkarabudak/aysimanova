"use client";

import Link from "next/link";
import { useCallback, useEffect, useReducer } from "react";
import { useTranslation } from "@/i18n/client";

export default function HeroSlider({ lng }: { lng: string }) {
  const { t } = useTranslation(lng);
  const [current, toggle] = useReducer((s: number) => (s === 0 ? 1 : 0), 0);

  const goTo = useCallback(
    (i: number) => {
      if (i !== current) toggle();
    },
    [current]
  );

  useEffect(() => {
    const id = window.setInterval(toggle, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: 700,
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          alt="Scientific laboratory"
          src="/logo-back.png"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,31,63,0.55) 0%, rgba(0,6,19,0.45) 100%)" }} />
      </div>

      {/* ── Slide 0 ── */}
      <Slide visible={current === 0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center" as const,
            minHeight: 700,
            padding: "2rem",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-wb.png"
            alt="Aysima Nova"
            style={{
              height: 200,
              width: "auto",
              marginBottom: 32,
            }}
          />
          <h1 className="font-headline-xl text-headline-xl text-on-primary mb-4">
            {t("hero.slide0.title")}
          </h1>
        </div>
      </Slide>

      {/* ── Slide 1 ── */}
      <Slide visible={current === 1}>
        <div
          className="max-w-container-max mx-auto px-8 w-full"
          style={{ minHeight: 700, display: "flex", alignItems: "center" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 w-full">
            <div className="text-on-primary">
              <h2 className="font-headline-xl text-headline-xl mb-6">
                {t("hero.slide1.title")}
              </h2>
              <p className="font-body-lg text-body-lg mb-6 text-on-primary-container">
                {t("hero.slide1.description")}
              </p>
              <p className="font-body-md text-body-md mb-10 text-on-primary-container/80">
                {t("hero.slide1.subdescription")}
              </p>
              <Link
                href={`/${lng}/products`}
                className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:brightness-90 transition-all"
              >
                {t("hero.slide1.cta")}
                <span translate="no" className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-sm w-full">
                <div className="flex items-center gap-4 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/1.avif"
                    alt="Uğur Karabudak"
                    className="w-24 h-24 rounded-xl object-cover shrink-0 border border-secondary/40"
                  />
                  <div>
                    <p className="font-headline-md text-headline-md text-on-primary leading-tight">
                      {t("hero.founderCard.title")}
                    </p>
                    <p className="font-label-sm text-label-sm text-on-primary-container mt-0.5">
                      {t("hero.founderCard.subtitle")}
                    </p>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-primary-container/90 leading-relaxed mb-6 italic">
                  &ldquo;{t("hero.founderCard.quote")}&rdquo;
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(["rdExpert", "cmcAffairs", "pharmaExec"] as const).map((key) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-label-sm text-label-sm text-on-primary-container"
                    >
                      {t(`hero.founderCard.tags.${key}`)}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${lng}/founder`}
                  className="flex items-center justify-center gap-2 w-full bg-secondary/80 hover:bg-secondary text-on-secondary py-3 rounded-xl font-label-lg text-label-lg transition-all"
                >
                  {t("hero.founderCard.cta")}
                  <span translate="no" className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          display: "flex",
          gap: 8,
        }}
      >
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              height: 8,
              width: current === i ? 32 : 8,
              borderRadius: 9999,
              backgroundColor:
                current === i ? "#3a6a00" : "rgba(255,255,255,.4)",
              border: "none",
              cursor: "pointer",
              transition: "all .3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── tiny wrapper that just controls opacity ─── */
function Slide({
  visible,
  children,
}: {
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: visible ? 11 : 10,
        opacity: visible ? 1 : 0,
        transition: "opacity 800ms ease-in-out",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}
