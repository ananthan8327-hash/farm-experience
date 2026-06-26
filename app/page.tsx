"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const featuredAnimals = [
  {
    title: "Colorful Chicks",
    subtitle: "Vibrant starter chicks, ready for delivery",
    price: "RM5/chick",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM.jpeg",
    bg: "bg-[#2f6f2f] text-white",
  },
  {
    title: "Layer Chickens",
    subtitle: "Premium layers for reliable egg supply",
    price: "RM22/kg",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM (2).jpeg",
    bg: "bg-[#1f4d2e] text-white",
  },
  {
    title: "Premium Ducks",
    subtitle: "Healthy ducks, COD available",
    price: "COD available",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM (3).jpeg",
    bg: "bg-[#35604b] text-white",
  },
];

const galleryImages = [
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM (3).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.14.14 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.30 PM (1).jpeg",
];

export default function Home() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f5ede5] text-[#3b1f0d]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#e1c5b2] bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4 text-lg font-semibold text-[#4b382f]">
            <span className="rounded-2xl bg-[#8f5b3a] px-3 py-2 text-sm font-bold uppercase tracking-[0.24em] text-white">Farm</span>
            Farm House
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {[
              { label: "Home", href: "home" },
              { label: "About", href: "about" },
              { label: "Products", href: "products" },
              { label: "Herd", href: "gallery" },
              { label: "Contact", href: "contact" },
            ].map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium uppercase tracking-[0.16em] text-[#5a4a43] transition hover:text-[#8f5b3a]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/image/WhatsApp Image 2026-06-21 at 5.15.29 PM (2).jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex rounded-full bg-[#1f4d2e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#dfe6db]"
          >
            Fresh Chickens & Ducks • COD Johor Bahru
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-5xl font-black uppercase tracking-[-0.06em] leading-[0.98] md:text-7xl"
          >
            FRESH FARM PRODUCTS FROM JOHOR BAHRU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mx-auto mt-8 max-w-3xl text-lg font-semibold leading-8 text-[#e9e2d9] md:text-xl"
          >
            Only premium chickens and ducks, ready for fast delivery in Johor Bahru. Order direct and enjoy fresh farm quality.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("contact")}
            className="mt-12 inline-flex items-center justify-center rounded-full bg-[#33a057] px-10 py-5 text-base font-bold uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/20 transition hover:bg-[#2a8645]"
          >
            WhatsApp Order
          </motion.button>
        </div>
      </section>

      <section className="overflow-hidden bg-[#1f4d2e] py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 text-sm font-semibold uppercase tracking-[0.2em] md:px-10">
          <div className="marquee flex min-w-full items-center whitespace-nowrap text-base">
            <span className="mx-6 inline-flex items-center gap-2">🐔 FRESH DAILY</span>
            <span className="mx-6 inline-flex items-center gap-2">🥚 COD JOHOR BAHRU</span>
            <span className="mx-6 inline-flex items-center gap-2">🦆 PREMIUM QUALITY</span>
            <span className="mx-6 inline-flex items-center gap-2">🐓 FARM RAISED</span>
            <span className="mx-6 inline-flex items-center gap-2">🐔 FRESH DAILY</span>
            <span className="mx-6 inline-flex items-center gap-2">🥚 COD JOHOR BAHRU</span>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f7efe5] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8f5b3a]">Our Products</p>
            <h2 className="mt-4 text-4xl font-bold text-[#3b1f0d] sm:text-5xl">Farm favorites, freshly raised</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a4a43] sm:text-lg">
              Carefully selected livestock and farm produce, prepared for buyers who demand quality, freshness, and reliable service.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredAnimals.map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10 ${product.bg}`}
              >
                <div className="relative overflow-hidden rounded-[2rem] p-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-96 w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="space-y-4 px-8 pb-10 pt-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#e6d2bb]">{product.subtitle}</p>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.04em] text-white">{product.title}</h3>
                  <p className="text-xl font-semibold text-[#fde4c7]">{product.price}</p>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#f2d0b4] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#3b2110] transition hover:bg-[#eed5b8]"
                  >
                    ORDER NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#8f5b3a]">Why choose us</p>
              <h2 className="mt-4 text-4xl font-bold text-[#3b1f0d] sm:text-5xl">A trusted farm partner for livestock and quality produce</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a4a43]">
                Our farm keeps animal welfare first, delivers premium stock, and gives buyers a complete farm experience from ordering to delivery.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: "�", title: "Healthy Flocks", detail: "Raised with care in clean farm housing." },
                  { icon: "🌿", title: "Trusted Quality", detail: "Strict selection for the best stock." },
                  { icon: "🚜", title: "Fresh Supply", detail: "Daily deliveries and ready stock." },
                  { icon: "🤝", title: "Local Support", detail: "Built for small farms and large buyers." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-[#e5d5c8] bg-[#f9f2ec] p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e8d3c1] text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-[#3b1f0d]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5a4a43]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-[#f1e1d6] p-6 shadow-2xl">
              <img
                src="/image/WhatsApp Image 2026-06-21 at 5.15.30 PM (1).jpeg"
                alt="Navin with ostrich"
                className="h-full w-full min-h-[420px] object-cover rounded-[1.75rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f3e7de] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-[#4a2e1f]">Gallery</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#3b1f0d] sm:text-5xl">
              A premium farm showcase
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`overflow-hidden rounded-[2rem] bg-white shadow-2xl ${idx % 3 === 0 ? "md:row-span-2" : ""}`}
                style={{ minHeight: idx % 3 === 0 ? 520 : 320 }}
              >
                <img src={src} alt={`Gallery ${idx + 1}`} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#4a2e1f]">Contact</p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#3b2110] sm:text-5xl">
                Ready to reserve the best livestock?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5a4536]">
                Reach out now for farm support, pricing, and COD delivery across Johor Bahru.
              </p>
              <div className="mt-10 space-y-4 rounded-[2rem] bg-[#fff5eb] p-8 ring-1 ring-[#e3d1c3]">
                <p className="text-sm uppercase tracking-[0.18em] text-[#7a4f2f]">Phone</p>
                <p className="text-2xl font-semibold text-[#3b2110]">01139607215</p>
                <p className="text-[#5a4536]">WhatsApp support available</p>
              </div>
            </div>
            <form className="rounded-[2rem] bg-white p-8 shadow-2xl">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-[#3b2110]">
                  First Name
                  <input type="text" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b2110] outline-none transition focus:border-[#8f5b3a]" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-[#3b2110]">
                  Last Name
                  <input type="text" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b2110] outline-none transition focus:border-[#8f5b3a]" />
                </label>
              </div>
              <label className="mt-6 space-y-2 text-sm font-semibold text-[#3b2110]">
                Email
                <input type="email" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b2110] outline-none transition focus:border-[#8f5b3a]" />
              </label>
              <label className="mt-6 space-y-2 text-sm font-semibold text-[#3b2110]">
                Message
                <textarea rows={5} className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b2110] outline-none transition focus:border-[#8f5b3a]" />
              </label>
              <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#4a2e1f] px-6 py-4 text-base font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#3d271a]">
                Send inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {activeGalleryIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActiveGalleryIndex(null)}>
          <button
            type="button"
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute right-6 top-6 rounded-full bg-white/20 px-4 py-2 text-white hover:bg-white/30 transition"
          >
            ✕ Close
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white p-4">
            <img
              src={galleryImages[activeGalleryIndex]}
              alt="Lightbox"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
