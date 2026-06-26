"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const featuredAnimals = [
  {
    title: "Healthy Cattle",
    subtitle: "Grass-fed and pasture-raised",
    price: "From RM3,200",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.28 PM.jpeg",
  },
  {
    title: "Premium Poultry",
    subtitle: "Fresh chickens and eggs daily",
    price: "From RM22/kg",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (2).jpeg",
  },
  {
    title: "Quality Goats",
    subtitle: "Strong breeders, ready for farm life",
    price: "From RM1,400",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.30 PM.jpeg",
  },
];

const herdImages = [
  "/image/WhatsApp Image 2026-06-21 at 5.14.29 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.12 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.26 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (1).jpeg",
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

      <section id="home" className="relative overflow-hidden pt-24 pb-24">
        <div className="absolute inset-0 bg-[url('/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/25 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:px-10">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <span className="inline-flex rounded-full bg-[#8f5b3a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
              Free Template • Farm Design
            </span>
            <h1 className="mt-8 text-4xl font-black uppercase tracking-[-0.05em] text-[#3b1f0d] sm:text-5xl md:text-6xl">
              Discover the Finest Livestock for Your Farm
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5a4a43] sm:text-xl">
              Discover top-tier livestock raised with care, precision, and the highest farm standards for your business or homestead.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("products")}
                className="inline-flex items-center justify-center rounded-full bg-[#8f5b3a] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#6d3f1a]"
              >
                Browse Livestock
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center rounded-full border border-[#8f5b3a] bg-white px-8 py-4 text-base font-semibold text-[#8f5b3a] shadow-sm transition hover:bg-[#f7efe8]"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative hidden overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/90 shadow-2xl md:block">
            <img
              src="/image/WhatsApp Image 2026-06-21 at 5.15.27 PM.jpeg"
              alt="Farm livestock"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#4b382f] shadow-lg">
              Discover healthy livestock and farm-grown excellence
            </div>
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="overflow-hidden rounded-[2rem] border border-[#d9c3b0] bg-white shadow-xl"
              >
                <div className="relative h-80 overflow-hidden bg-[#f5ede7]">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="space-y-4 p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#a37555]">{product.subtitle}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#3b1f0d]">{product.title}</h3>
                  </div>
                  <p className="text-lg font-bold text-[#7a4f2f]">{product.price}</p>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#7a4f2f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#5d3d28]"
                  >
                    Order Now
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
                  { icon: "🐄", title: "Healthy Animals", detail: "Raised with care on wide-open pasture." },
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
                src="/image/WhatsApp Image 2026-06-21 at 5.14.14 PM.jpeg"
                alt="Farm tour"
                className="h-full w-full min-h-[420px] object-cover rounded-[1.75rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#fcf4ec] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8f5b3a]">Meet the herd</p>
            <h2 className="mt-4 text-4xl font-bold text-[#3b1f0d] sm:text-5xl">Our animals are cared for like family</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {herdImages.map((src, idx) => (
              <button
                key={src}
                onClick={() => setActiveGalleryIndex(idx)}
                type="button"
                className="group overflow-hidden rounded-[2rem] shadow-xl transition hover:-translate-y-1"
              >
                <img src={src} alt={`Herd ${idx + 1}`} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="rounded-b-[2rem] bg-white px-5 py-6 text-left">
                  <h3 className="text-lg font-semibold text-[#3b1f0d]">Farm Favorite</h3>
                  <p className="mt-2 text-sm text-[#5a4a43]">Healthy, well-fed, and ready for transport.</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#8f5b3a] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#f7e3d4]">Get in touch</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ready to bring home premium livestock?</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f5e5d7]">
                Send us a message or WhatsApp us directly and we will help you choose the best animals for your farm.
              </p>
              <div className="mt-10 space-y-4 rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.28em] text-[#f7e3d4]">Phone</p>
                <p className="text-2xl font-semibold text-white">011-3960-7215</p>
                <p className="text-[#f5e5d7]">WhatsApp support available</p>
              </div>
            </div>
            <form className="rounded-[2rem] bg-white p-8 shadow-2xl">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-[#3b1f0d]">
                  First Name
                  <input type="text" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b1f0d] outline-none transition focus:border-[#814c20]" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-[#3b1f0d]">
                  Last Name
                  <input type="text" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b1f0d] outline-none transition focus:border-[#814c20]" />
                </label>
              </div>
              <label className="mt-6 space-y-2 text-sm font-semibold text-[#3b1f0d]">
                Email
                <input type="email" className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b1f0d] outline-none transition focus:border-[#814c20]" />
              </label>
              <label className="mt-6 space-y-2 text-sm font-semibold text-[#3b1f0d]">
                Message
                <textarea rows={5} className="w-full rounded-3xl border border-[#d9c3b0] bg-[#fbf2ea] px-4 py-3 text-sm text-[#3b1f0d] outline-none transition focus:border-[#814c20]" />
              </label>
              <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#3b1f0d] px-6 py-4 text-base font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#2d1810]">
                Subscribe & Send
              </button>
            </form>
          </div>
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
              src={herdImages[activeGalleryIndex]}
              alt="Lightbox"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
