"use client";

import { useState } from "react";

// Example Amazon affiliate products
const amazonProducts = [
  {
    title: "Air Fryer Paper Liners",
    images: [
      "https://m.media-amazon.com/images/I/710Q09hFyFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+BvhvGXZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ZV4Cd9+iL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81iTaQ6Oc8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81FW4FU7jUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81VphwIvdgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71b4JGBMlDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/7177q0bVe+L._AC_SL1500_.jpg",
    ],
    link: "https://amzn.to/4g90orC",
  },
  {
    title: "Vegetable Chopper",
    images: [
      "https://m.media-amazon.com/images/I/71qwt6pU36L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81BSNGYYQ1L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71a3rzA4zzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71NJGOmM5pL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71nL9yMd3tL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81pfqrQX9lL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/810r98OZo9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81qrYaaRd0L._AC_SL1500_.jpg",
    ],
    link: "https://amzn.to/4m0DjZp",
  },
  {
    title: "Magic Bullet Blender",
    images: [
      "https://m.media-amazon.com/images/I/61w2Tj7r0BL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81aXBvYE4PL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61CX+M5vkgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71fXIcEaM6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MDLRi3oKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71C6kvPaOeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81jWDULMgFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81aXBvYE4PL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617GAyqXuhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HQIpD8uAL._AC_SL1500_.jpg",
    ],
    link: "https://amzn.to/3JJMQqC",
  },
];

import { useEffect } from "react";

function AffiliateComponent() {
  // Slideshow state for each product
  const [slideIndexes, setSlideIndexes] = useState([0, 0, 0]);

  // Auto-slide effect
  useEffect(() => {
    const intervals = amazonProducts.map((product, idx) =>
      setInterval(() => {
        setSlideIndexes((prev) => {
          const copy = [...prev];
          copy[idx] = (copy[idx] + 1) % product.images.length;
          return copy;
        });
      }, 2500)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  const handlePrev = (idx: number, images: string[]) => {
    setSlideIndexes((prev) => {
      const copy = [...prev];
      copy[idx] = (copy[idx] - 1 + images.length) % images.length;
      return copy;
    });
  };
  const handleNext = (idx: number, images: string[]) => {
    setSlideIndexes((prev) => {
      const copy = [...prev];
      copy[idx] = (copy[idx] + 1) % images.length;
      return copy;
    });
  };

  return (
    <>
      {" "}
      {/* Affiliate Products Heading */}
      <h2 className="text-2xl font-extrabold text-center mb-2 mt-6 text-yellow-700 drop-shadow-lg bg-yellow-50 py-3 rounded-lg border-2 border-yellow-300 flex items-center justify-center gap-2 mx-2">
        <span role="img" aria-label="star">
          ⭐
        </span>
        Must-Have Products I Use &amp; Recommend!
        <span role="img" aria-label="star">
          ⭐
        </span>
      </h2>
      <div className="text-center text-base text-gray-700 mb-4 font-medium">
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-1">
          Personal Note
        </span>
        <br />I personally use and love these products in my kitchen. I only
        recommend what I trust!
      </div>
      {/* Amazon Affiliate Links - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 xl:mx-0 my-4">
        {amazonProducts.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center border rounded-lg p-3 bg-white shadow w-full h-full"
          >
            <a
              href={product.link}
              target="_blank"
              rel="noopener sponsored"
              className="w-full flex flex-col items-center h-full"
            >
              <div
                className="w-full flex flex-col items-center justify-center relative"
                style={{
                  minHeight: "220px",
                  height: "220px",
                  maxHeight: "320px",
                }}
              >
                {/* Top Pick badge for first product */}
                {idx === 0 && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 font-bold px-2 py-1 rounded shadow text-xs z-10 animate-bounce">
                    ⭐ Top Pick
                  </span>
                )}
                <img
                  src={
                    product.images[slideIndexes[idx] % product.images.length]
                  }
                  alt={product.title}
                  className="w-full h-full object-contain"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                {/* No prev/next buttons, only auto-slide */}
              </div>
              <div className="font-semibold text-center mb-1 text-sm sm:text-base">
                {product.title}
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded mt-2 w-full max-w-[140px] mx-auto text-xs sm:text-sm transition-transform duration-200 hover:scale-105">
                Buy Now
              </button>
            </a>
          </div>
        ))}
      </div>
      {/* Affiliate Disclosure */}
      <div className="text-xs text-gray-600 italic mx-4 xl:mx-0 mb-4">
        Disclosure: This post contains affiliate links. If you click and make a
        purchase, I may earn a small commission at no extra cost to you.
      </div>
    </>
  );
}

export default AffiliateComponent;
