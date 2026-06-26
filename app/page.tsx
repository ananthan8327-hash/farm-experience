"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: "chickens",
    title: "Chickens",
    description: "Healthy, fresh chickens raised with care on our farm. Available for COD in Johor Bahru.",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg",
  },
  {
    id: "colorful-chicks",
    title: "Colorful Chicks",
    description: "Ayam Warna-Warni - vibrant colored chicks (RM5 per chick). Beautiful and healthy birds.",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg",
  },
  {
    id: "ducks",
    title: "Ducks",
    description: "Premium ducks from our farm. Fresh and available for delivery within Johor Bahru.",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (3).jpeg",
  },
];

const galleryImages = [
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (2).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (3).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (1).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (2).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.28 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.28 PM (1).jpeg",
];

export default function Home() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);



  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl font-bold md:text-7xl">FARM EXPERIENCE</h1>
          <p className="mt-4 text-xl md:text-2xl">Fresh Chickens & Ducks from Johor Bahru</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gray-50 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">About Our Farm</h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Welcome to our farm! We specialize in raising high-quality chickens and ducks with care and dedication. Our products include:
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 font-bold">•</span>
                  <span><strong>Ayam Warna-Warni</strong> - Colorful chickens, RM5 per chick</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">•</span>
                  <span><strong>Ayam Penelur</strong> - Layer chickens for egg production</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">•</span>
                  <span><strong>Ducks</strong> - Fresh, healthy ducks</span>
                </li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-gray-900">
                📍 COD Johor Bahru | 📱 01139607215
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (2).jpeg"
                alt="Farm owner with animals"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-white px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">Our Products</h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            High-quality farm products delivered fresh to you
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="mt-3 text-gray-700">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="bg-gray-50 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">Farm Gallery</h2>
          <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4">
            {galleryImages.map((src, idx) => (
              <motion.button
                key={src}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveGalleryIndex(idx)}
                className="mb-4 block w-full overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="h-auto w-full"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white px-6 py-20 md:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to order? Contact us via WhatsApp or call directly.
          </p>
          <a
            href="https://wa.me/601139607215"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600 transition text-lg"
          >
            💬 WhatsApp: 01139607215
          </a>
          <p className="mt-6 text-gray-600">
            📍 COD Johor Bahru
          </p>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      {activeGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute right-6 top-6 rounded-full bg-white/20 px-4 py-2 text-white hover:bg-white/30 transition"
          >
            ✕ Close
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-lg">
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
