"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: "colorful-chicks",
    title: "Colorful Chicks",
    description: "Ayam Warna-Warni - vibrant, healthy chicks ready for your farm",
    price: "RM5/chick",
    image: "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg",
  },
  {
    id: "layer-chickens",
    title: "Layer Chickens",
    description: "Ayam Penelur - premium egg-laying hens for consistent production",
    price: "Fresh stock available",
    image: "/image/WhatsApp Image 2026-06-21 at 5.13.21 PM.jpeg",
  },
  {
    id: "ducks",
    title: "Premium Ducks",
    description: "Healthy ducks from our farm, fresh and ready for delivery",
    price: "COD available",
    image: "/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (3).jpeg",
  },
];

const galleryImages = [
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (1).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (2).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 4.57.14 PM (3).jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.30 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.15.28 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.14.29 PM.jpeg",
  "/image/WhatsApp Image 2026-06-21 at 5.14.14 PM.jpeg",
];

export default function Home() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [activeNavMobile, setActiveNavMobile] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveNavMobile(false);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="text-2xl font-bold text-green-600">🌾 Farm Experience</div>
          <div className="hidden md:flex gap-8">
            {["home", "about", "products", "gallery", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-medium text-gray-700 hover:text-green-600 transition capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image/WhatsApp Image 2026-06-21 at 5.15.29 PM.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Fresh Farm Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Premium Chickens & Ducks from Johor Bahru
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("products")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition"
            >
              Explore Our Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Navin's Farm</h2>
              <p className="text-lg text-gray-700 leading-8 mb-8">
                Welcome to our family farm! With years of experience, we raise high-quality chickens and ducks with passion and care. We believe in sustainable farming and delivering only the best products to our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🐔</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Colorful Chicks</h3>
                    <p className="text-gray-700">Ayam Warna-Warni - RM5 per chick</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🐓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Layer Chickens</h3>
                    <p className="text-gray-700">Ayam Penelur - Premium egg production</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🦆</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Ducks</h3>
                    <p className="text-gray-700">Fresh ducks - COD available</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-lg font-semibold text-green-600">
                📍 Johor Bahru | 📱 01139607215
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src="/image/WhatsApp Image 2026-06-21 at 5.15.27 PM (2).jpeg"
                alt="Navin with farm animals"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-gradient-to-b from-green-50 to-white px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-lg text-gray-600">Carefully raised with quality and care</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative h-72 w-full overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-green-600 font-bold text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="bg-white px-6 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Farm Gallery</h2>
            <p className="text-lg text-gray-600">Beautiful moments from our farm</p>
          </motion.div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((src, idx) => (
              <motion.button
                key={src}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveGalleryIndex(idx)}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-64"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gradient-to-b from-green-50 to-green-100 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today and get fresh farm products delivered straight to you
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/601139607215"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-5 rounded-lg shadow-lg transition text-lg"
            >
              <span>💬</span> WhatsApp us: 01139607215
            </motion.a>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📍 Location</h3>
                <p className="text-gray-700">Johor Bahru</p>
                <p className="text-gray-600 text-sm">COD Available</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Phone</h3>
                <p className="text-gray-700">01139607215</p>
                <p className="text-gray-600 text-sm">WhatsApp preferred</p>
              </div>
            </div>
          </motion.div>
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
