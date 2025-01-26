"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: "1",
    name: "Pro Cricket Bat",
    brand: "CricketMaster",
    price: 2999,
    image: "/cricket.jpg",
  },
  {
    id: "2",
    name: "Elite Tennis Racket",
    brand: "TennisProX",
    price: 1999,
    image: "/tabletennis.jpg",
  },
];

export function BestSellers() {
  return (
    <div className="min-h-scree">
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 ">
      <div className="font-bold text-2xl text-black">BestSellers</div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-5 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {bestSellers.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="mt-2 text-blue-600">
                    Rs. {product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
