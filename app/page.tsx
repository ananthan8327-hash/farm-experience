"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const hubItems = [
  { id: "cattle", label: "🐄 Cattle" },
  { id: "chicken", label: "🐔 Chicken" },
  { id: "goat", label: "🐐 Goat" },
  { id: "eggs", label: "🥚 Eggs" },
];

const sectionData = [
  {
    id: "cattle",
    title: "Cattle Experience",
    description:
      "Luxury wellness for pasture-raised beef, curated for modern food enthusiasts.",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg",
  },
  {
    id: "chicken",
    title: "Chicken Journey",
    description:
      "Soft feathered heritage, fresh every sunrise with premium care.",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (2).jpeg",
  },
  {
    id: "goat",
    title: "Goat Elegance",
    description: "Minimal sophistication grounded in nature and pure quality.",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (3).jpeg",
  },
  {
    id: "eggs",
    title: "Eggs Ritual",
    description: "Golden-yolk freshness delivered daily with a premium touch.",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg",
  },
];

const gallery = [
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (1).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (2).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (3).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.28 PM (2).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.30 PM.jpeg",
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentHubIndex, setCurrentHubIndex] = useState(0);
  const [hubPaused, setHubPaused] = useState(false);
  const [signatureId, setSignatureId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentHubIndex((current) => (current + 1) % hubItems.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentHubIndex((current) => (current - 1 + hubItems.length) % hubItems.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Parallax background movement for cinematic feel
  useEffect(() => {
    let raf = 0;
    let last = 0;
    const onScroll = () => {
      if (!heroRef.current) return;
      const top = window.scrollY || window.pageYOffset;
      if (Math.abs(top - last) < 2) return;
      last = top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = Math.min(80, Math.max(-80, top * -0.08));
        heroRef.current!.style.backgroundPosition = `center ${50 + offset}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, ease: [0.18,0.9,0.28,1] } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.18,0.9,0.28,1] } },
  };

  const nextHub = () => {
    setCurrentHubIndex((current) => (current + 1) % hubItems.length);
  };

  const prevHub = () => {
    setCurrentHubIndex((current) => (current - 1 + hubItems.length) % hubItems.length);
  };

  useEffect(() => {
    if (!signatureId) return;
    const t = setTimeout(() => setSignatureId(null), 3000);
    return () => clearTimeout(t);
  }, [signatureId]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050b08] text-[#f8f5ef]">
      {showIntro ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b08]"
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <p className="text-sm uppercase tracking-[0.48em] text-[#8d8b7d]/70">
              Entering
            </p>
            <h1 className="text-4xl font-semibold uppercase tracking-[0.35em] sm:text-6xl">
              Farm Experience
            </h1>
            <p className="max-w-xs text-base text-[#b2ad99]/85 sm:max-w-md">
              A premium cinematic farm brand experience.
            </p>
          </div>
        </motion.div>
      ) : null}

      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-8 lg:px-14"
        style={{ backgroundImage: "url('/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg')", backgroundSize: 'cover', backgroundPosition: 'center 50%' }}
      >
        <div className="absolute inset-0 bg-black/36" />
        <div className="absolute inset-x-0 top-16 h-[24rem] bg-[radial-gradient(circle,_rgba(225,199,127,0.18),_transparent_55%)] blur-3xl" />
        <div className="vignette" />
        <div className="film-grain" />
        <div className="hero-glow" />
        <motion.div
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          variants={containerVariants}
          className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 pt-20"
        >
          <div className="z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.34em] text-[#cdc9b5]/80 shadow-[0_20px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl">
              Premium farm brand experience
            </div>
            <motion.div variants={itemVariant} className="space-y-6">
              <p className="text-sm uppercase tracking-[0.48em] text-[#b9b39d]/75">
                Modern farm storytelling
              </p>
              <motion.h1 variants={itemVariant} className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl cinematic-text">
                FARM EXPERIENCE
              </motion.h1>
              <motion.p variants={itemVariant} className="mx-auto max-w-2xl text-lg leading-8 text-[#d8d2b6]/85 sm:text-xl">
                Fresh. Natural. Trusted. A cinematic digital experience for a next-generation farm.
              </motion.p>
            </motion.div>
            <button
              type="button"
              onClick={() => setCurrentHubIndex(0)}
              className="inline-flex smooth-interaction items-center justify-center rounded-full border border-[#e1c77f]/30 bg-[#e1c77f]/10 px-9 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#e1c77f] hover:border-[#e1c77f] hover:bg-[#e1c77f]/15"
            >
              Explore
            </button>
          </div>
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-[60%] mx-auto h-[24rem] w-full max-w-5xl opacity-60"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),transparent_50%)] blur-2xl" />
          </motion.div>
        </motion.div>
      </section>

      <section id="farm-hub" className="relative px-6 pb-16 pt-8 sm:px-8 lg:px-14">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 rounded-[2rem] border border-white/10 bg-[#08110e]/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl"
        >
          <div
            onPointerEnter={() => setHubPaused(true)}
            onPointerLeave={() => setHubPaused(false)}
            className="relative flex h-[23rem] w-full max-w-4xl items-center justify-center rounded-[2rem] border border-white/10 bg-[#08110e]/80 p-8 shadow-[inset_0_0_120px_rgba(0,0,0,0.22)]">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,_rgba(109,176,139,0.16),transparent_40%)] blur-3xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#e1c77f]/20 bg-black/50 shadow-[0_0_60px_rgba(225,199,127,0.18)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0d140f]">
                  <span className="text-4xl">🌾</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.4em] text-[#c2b88b]/75">
                  Farm Hub
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Experience the farm as a connected story.
                </h2>
              </div>
            </div>
            {hubItems.map((item, index) => {
              const angle = (index / hubItems.length) * Math.PI * 2;
              const radius = 10.5;
              const top = 50 + Math.sin(angle) * radius;
              const left = 50 + Math.cos(angle) * radius;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ opacity: [0.88, 1, 0.88], scale: [1, 1.07, 1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: [0.18,0.9,0.28,1], delay: index * 0.18 }}
                  onClick={() => {
                    setCurrentHubIndex(index);
                    setSignatureId(item.id);
                  }}
                  className={`absolute flex h-20 w-20 items-center justify-center rounded-full border border-[#e1c77f]/20 bg-[#0b140f]/80 text-xl text-[#f8f5ef] shadow-[0_0_32px_rgba(225,199,127,0.18)] backdrop-blur-xl ${index === currentHubIndex ? 'scale-105 ring-2 ring-[#e1c77f]/20' : ''}`}
                  style={{ top: `${top}%`, left: `${left}%`, transform: "translate(-50%, -50%)" }}
                >
                  <span className="flex flex-col items-center gap-1 text-sm leading-none">
                    <span>{item.label.split(" ")[0]}</span>
                    <span className="text-xs text-[#c6bd9a]">{item.label.split(" ")[1]}</span>
                  </span>
                  {signatureId === item.id ? (
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e1c77f]/12 via-transparent to-[#e1c77f]/06"
                    />
                  ) : null}
                </motion.button>
              );
            })}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
              <button
                onClick={prevHub}
                aria-label="Previous hub"
                className="rounded-full bg-white/6 p-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10"
              >
                ◀
              </button>
              <div className="mx-2 rounded-full bg-black/40 px-4 py-2 text-sm text-[#d6d0b5]">
                {hubItems[currentHubIndex].label}
              </div>
              <button
                onClick={nextHub}
                aria-label="Next hub"
                className="rounded-full bg-white/6 p-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10"
              >
                ▶
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="space-y-32">
        {sectionData.map((section, idx) => (
          <section
            id={section.id}
            key={section.id}
            className={`relative min-h-[90vh] overflow-hidden px-6 py-16 sm:px-8 lg:px-14`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_28%)] opacity-40" />
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center md:justify-between"
            >
              <div className="md:w-[48%]">
                <div className="glass-card rounded-[2rem] p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#c4b989]/80">
                    {section.title}
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
                    {section.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[#d6d0b5]/88">
                    {section.description}
                  </p>
                  {section.id === "eggs" ? (
                    <div className="mt-8 rounded-3xl bg-[#0b130f]/85 p-6 ring-1 ring-white/10">
                      <p className="text-xs uppercase tracking-[0.32em] text-[#b8b08b]/80">
                        Fresh Daily
                      </p>
                      <p className="mt-3 text-5xl font-semibold text-[#e1c77f]">100%</p>
                      <p className="mt-2 text-sm text-[#cfc59d]/80">
                        Fresh eggs delivered every morning with premium care.
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative md:w-[48%]"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#08110e]/70 shadow-[0_40px_120px_rgba(0,0,0,0.24)]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>
        ))}
      </div>

      <section className="relative px-6 pb-16 pt-20 sm:px-8 lg:px-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.38em] text-[#b8b08b]/75">
              Gallery
            </p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Cinematic farm visuals.
            </h2>
          </div>
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {gallery.map((src, index) => (
              <motion.button
                key={src}
                whileHover={{ scale: 1.03 }}
                className="mb-4 block w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#08110e]/70 shadow-[0_24px_60px_rgba(0,0,0,0.2)]"
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#08110e]/70 p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl"
        >
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Farm Raised", value: "Premium" },
              { title: "Fresh Daily", value: "Always" },
              { title: "Quality Checked", value: "100%" },
              { title: "Direct Supply", value: "From Farm" },
            ].map((item) => (
              <div key={item.title} className="space-y-3 rounded-3xl bg-[#09120f]/80 p-6">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-[#b6ae8f]/80">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 pb-20 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-[#08110e]/75 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.28)] backdrop-blur-3xl md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c2b88b]/75">
              Connect with the farm
            </p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">
              Start your premium farm experience.
            </h2>
            <p className="max-w-xl text-base leading-8 text-[#d6d0b5]/85">
              Reach out instantly via WhatsApp or call directly. We bring the farm to your table with cinematic care and trusted quality.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/1234567890"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[#e1c77f] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#08110e] shadow-[0_24px_60px_rgba(225,199,127,0.25)] transition hover:brightness-110"
              >
                WhatsApp
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#f8f5ef] transition hover:border-[#e1c77f] hover:bg-[#e1c77f]/10"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#010804]/80 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-[#08110e]/80">
              <iframe
                title="Farm location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.326291678181!2d-122.41941568468027!3d37.77492977975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6a0b6f13%3A0x7a2f4b4f9823cfad!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 text-sm text-[#f8f5ef] transition hover:bg-white/15"
          >
            Close
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#030805] shadow-[0_40px_140px_rgba(0,0,0,0.5)]">
            <img
              src={gallery[activeIndex]}
              alt={`Lightbox ${activeIndex + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      {signatureId ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSignatureId(null)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#07100d]/95 p-8 text-center shadow-2xl"
          >
            <div className="mx-auto mb-4 h-28 w-28 items-center justify-center rounded-full bg-[#0d140f] p-4 text-4xl shadow-md">
              {hubItems.find((h) => h.id === signatureId)?.label ?? "🌾"}
            </div>
            <h3 className="text-2xl font-semibold">
              {hubItems.find((h) => h.id === signatureId)?.label.split(" ")[1]}
            </h3>
            <p className="mt-3 text-sm text-[#d6d0b5]/90">
              Experience a curated story of {hubItems.find((h) => h.id === signatureId)?.label.split(" ")[1].toLowerCase()} from pasture to plate.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setSignatureId(null)}
                className="rounded-full bg-[#e1c77f] px-6 py-3 font-semibold text-[#08110e]"
              >
                Continue
              </button>
              <button
                onClick={() => setSignatureId(null)}
                className="rounded-full border border-white/10 px-6 py-3 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </main>
  );
}
