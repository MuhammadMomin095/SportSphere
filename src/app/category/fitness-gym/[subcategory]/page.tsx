"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/providers/cart-provider"

const categories = {
  "yoga-mats": {
    id: "yoga-mats",
    name: "Yoga Mats",
    products: [
      { id: "yoga-mats-1", name: "Premium Yoga Mat", brand: "YogaFlex", price: 1999, image: "/yoga-mat-1.jpg" },
      { id: "yoga-mats-2", name: "Non-Slip Yoga Mat", brand: "ZenMat", price: 2499, image: "/yoga-mat-2.jpg" },
      { id: "yoga-mats-3", name: "Extra Thick Yoga Mat", brand: "ComfortFlow", price: 2999, image: "/yoga-mat-3.jpg" },
      { id: "yoga-mats-4", name: "Travel Yoga Mat", brand: "YogaGo", price: 1799, image: "/yoga-mat-4.jpg" },
    ],
  },
  "gym-bags": {
    id: "gym-bags",
    name: "Gym Bags",
    products: [
      { id: "gym-bags-1", name: "Heavy-Duty Gym Duffel", brand: "GymMaster", price: 3999, image: "/gym-bag-1.jpg" },
      { id: "gym-bags-2", name: "Compact Gym Backpack", brand: "FitPack", price: 2499, image: "/gym-bag-2.jpg" },
      { id: "gym-bags-3", name: "Ventilated Gym Tote", brand: "AirFlow", price: 2999, image: "/gym-bag-3.jpg" },
      { id: "gym-bags-4", name: "Water-Resistant Gym Sack", brand: "DryFit", price: 1999, image: "/gym-bag-4.jpg" },
    ],
  },
  dumbbells: {
    id: "dumbbells",
    name: "Dumbbells",
    products: [
      { id: "dumbbells-1", name: "Adjustable Dumbbell Set", brand: "PowerFlex", price: 4999, image: "/dumbbell-1.jpg" },
      { id: "dumbbells-2", name: "Rubber Hex Dumbbells", brand: "IronPro", price: 3499, image: "/dumbbell-2.jpg" },
      { id: "dumbbells-3", name: "Neoprene Dumbbell Set", brand: "FitGrip", price: 2999, image: "/dumbbell-3.jpg" },
      { id: "dumbbells-4", name: "Chrome Dumbbells", brand: "MetalPro", price: 3999, image: "/dumbbell-4.jpg" },
    ],
  },
  "exercise-benches": {
    id: "exercise-benches",
    name: "Exercise Benches",
    products: [
        { "id": "bench-1", "name": "Adjustable Weight Bench", "price": 4999, "brand": "Bowflex", "image": "/images/products/adjustable-weight-bench.jpg", "description": "Multi-angle adjustable weight bench for strength training." },
        { "id": "bench-2", "name": "Flat Bench", "price": 3999, "brand": "Rogue", "image": "/images/products/flat-bench.jpg", "description": "Stable and durable flat bench for heavy lifting." },
        { "id": "bench-3", "name": "Incline Bench", "price": 4599, "brand": "Reebok", "image": "/images/products/incline-bench.jpg", "description": "Incline bench for targeted upper body workouts." },
        { "id": "bench-4", "name": "Foldable Workout Bench", "price": 5499, "brand": "Adidas", "image": "/images/products/foldable-workout-bench.jpg", "description": "Foldable design for easy storage and transport." }
      ],
  },
  "gym-bottles": {
    id: "gym-bottles",
    name: "Gym Bottles",
    products: [
        { "id": "bottle-1", "name": "BPA-Free Gym Bottle", "price": 699, "brand": "Nike", "image": "/images/products/bpa-free-gym-bottle.jpg", "description": "Eco-friendly BPA-free water bottle with leak-proof cap." },
        { "id": "bottle-2", "name": "Insulated Gym Bottle", "price": 1199, "brand": "Hydro Flask", "image": "/images/products/insulated-gym-bottle.jpg", "description": "Double-wall insulated bottle keeps water cold for 24 hours." },
        { "id": "bottle-3", "name": "Squeeze Gym Bottle", "price": 499, "brand": "Adidas", "image": "/images/products/squeeze-gym-bottle.jpg", "description": "Ergonomic squeeze bottle for easy hydration during workouts." },
        { "id": "bottle-4", "name": "Flip-Top Sports Bottle", "price": 799, "brand": "Puma", "image": "/images/products/flip-top-sports-bottle.jpg", "description": "Leak-proof flip-top bottle with easy carrying handle." }
      ],
  },
  shakers: {
    id: "shakers",
    name: "Shakers",
    products: [
        { "id": "shaker-1", "name": "Blender Bottle", "price": 899, "brand": "BlenderBottle", "image": "/images/products/blender-bottle.jpg", "description": "High-quality shaker with stainless steel whisk ball." },
        { "id": "shaker-2", "name": "Double-Walled Protein Shaker", "price": 1299, "brand": "Hydro Flask", "image": "/images/products/double-wall-shaker.jpg", "description": "Insulated shaker keeps drinks cold for longer." },
        { "id": "shaker-3", "name": "Leak-Proof Gym Shaker", "price": 999, "brand": "Adidas", "image": "/images/products/leak-proof-shaker.jpg", "description": "Durable, leak-proof design with secure screw-on lid." },
        { "id": "shaker-4", "name": "Compartment Shaker Bottle", "price": 1499, "brand": "SmartShake", "image": "/images/products/compartment-shaker.jpg", "description": "Shaker with built-in storage for supplements and powders." }
      ],
  },
  "steel-bottles": {
    id: "steel-bottles",
    name: "Steel Bottles",
    products: [
        { "id": "steel-bottle-1", "name": "Stainless Steel Gym Bottle", "price": 1399, "brand": "Nike", "image": "/images/products/stainless-steel-gym-bottle.jpg", "description": "Premium stainless steel bottle with durable design." },
        { "id": "steel-bottle-2", "name": "Vacuum Insulated Bottle", "price": 1899, "brand": "Hydro Flask", "image": "/images/products/vacuum-insulated-bottle.jpg", "description": "Keeps beverages hot or cold for hours." },
        { "id": "steel-bottle-3", "name": "Ergonomic Steel Water Bottle", "price": 1599, "brand": "Reebok", "image": "/images/products/ergonomic-steel-bottle.jpg", "description": "Lightweight and durable with a sleek ergonomic design." },
        { "id": "steel-bottle-4", "name": "Wide Mouth Sports Bottle", "price": 1799, "brand": "Puma", "image": "/images/products/wide-mouth-steel-bottle.jpg", "description": "Wide mouth opening for easy refilling and cleaning." }
      ],
  },
  "ab-wheels": {
    id: "ab-wheels",
    name: "Ab Wheels",
    products: [
        { "id": "ab-wheel-1", "name": "Dual-Wheel AB Roller", "price": 999, "brand": "Nike", "image": "/images/products/dual-wheel-ab-roller.jpg", "description": "Dual-wheel design for added stability during ab workouts." },
        { "id": "ab-wheel-2", "name": "Adjustable Resistance AB Wheel", "price": 1499, "brand": "Adidas", "image": "/images/products/adjustable-resistance-ab-wheel.jpg", "description": "Adjustable resistance for different difficulty levels." },
        { "id": "ab-wheel-3", "name": "Foam-Grip AB Roller", "price": 899, "brand": "Reebok", "image": "/images/products/foam-grip-ab-roller.jpg", "description": "Soft foam grips for better comfort and control." },
        { "id": "ab-wheel-4", "name": "Compact AB Roller", "price": 1199, "brand": "Puma", "image": "/images/products/compact-ab-roller.jpg", "description": "Compact and lightweight design for easy portability." }
      ],
  },
  "body-support": {
    id: "body-support",
    name: "Body Support",
    products: [
        { "id": "body-support-1", "name": "Knee Support Brace", "price": 1299, "brand": "Nike", "image": "/images/products/knee-support-brace.jpg", "description": "Provides excellent knee support during workouts." },
        { "id": "body-support-2", "name": "Elbow Compression Sleeve", "price": 999, "brand": "Adidas", "image": "/images/products/elbow-compression-sleeve.jpg", "description": "Compression sleeve for better joint stability." },
        { "id": "body-support-3", "name": "Back Support Belt", "price": 1999, "brand": "Reebok", "image": "/images/products/back-support-belt.jpg", "description": "Ergonomic design for lumbar support and comfort." },
        { "id": "body-support-4", "name": "Wrist Wraps", "price": 799, "brand": "Puma", "image": "/images/products/wrist-wraps.jpg", "description": "Adjustable wrist wraps for better grip and wrist stability." }
      ],
  },
  "gloves-and-grips": {
    id: "gloves-and-grips",
    name: "Gloves And Grips",
    products: [
        { "id": "glove-1", "name": "Weight Lifting Gloves", "price": 1299, "brand": "Nike", "image": "/images/products/weight-lifting-gloves.jpg", "description": "Durable weight lifting gloves with wrist support." },
        { "id": "glove-2", "name": "Full Finger Gym Gloves", "price": 1499, "brand": "Adidas", "image": "/images/products/full-finger-gym-gloves.jpg", "description": "Breathable full-finger gloves for enhanced grip." },
        { "id": "glove-3", "name": "Anti-Slip Grip Gloves", "price": 999, "brand": "Reebok", "image": "/images/products/anti-slip-grip-gloves.jpg", "description": "Anti-slip grip gloves for better control during workouts." },
        { "id": "glove-4", "name": "Crossfit Training Gloves", "price": 1799, "brand": "Puma", "image": "/images/products/crossfit-training-gloves.jpg", "description": "High-performance gloves for CrossFit and weightlifting." }
      ],
  },
  "hand-grips": {
    id: "hand-grips",
    name: "Hand Grips",
    products: [
        { "id": "hand-grip-1", "name": "Adjustable Hand Grip", "price": 799, "brand": "Nike", "image": "/images/products/adjustable-hand-grip.jpg", "description": "Adjustable resistance hand grip for strength training." },
        { "id": "hand-grip-2", "name": "Foam Handle Hand Gripper", "price": 599, "brand": "Adidas", "image": "/images/products/foam-handle-hand-gripper.jpg", "description": "Comfortable foam grip for easy hand exercises." },
        { "id": "hand-grip-3", "name": "Heavy Resistance Grip", "price": 999, "brand": "Reebok", "image": "/images/products/heavy-resistance-grip.jpg", "description": "Heavy resistance hand gripper for advanced users." },
        { "id": "hand-grip-4", "name": "Metal Spring Hand Gripper", "price": 699, "brand": "Puma", "image": "/images/products/metal-spring-hand-gripper.jpg", "description": "Durable metal spring design for effective hand workouts." }
      ],
  },
  "resistance-band": {
    id: "resistance-band",
    name: "Resistance Band",
    products: [
        { "id": "band-1", "name": "Loop Resistance Band", "price": 1299, "brand": "Nike", "image": "/images/products/loop-resistance-band.jpg", "description": "High-quality loop bands for strength training." },
        { "id": "band-2", "name": "Heavy Duty Resistance Band", "price": 1599, "brand": "Adidas", "image": "/images/products/heavy-duty-resistance-band.jpg", "description": "Strong resistance band for muscle toning." },
        { "id": "band-3", "name": "Fabric Resistance Band", "price": 1399, "brand": "Reebok", "image": "/images/products/fabric-resistance-band.jpg", "description": "Soft fabric bands for comfortable resistance workouts." },
        { "id": "band-4", "name": "Pull-Up Assist Band", "price": 1799, "brand": "Puma", "image": "/images/products/pull-up-assist-band.jpg", "description": "Perfect for pull-up assistance and mobility exercises." }
      ],
  },
  "slimming-belt": {
    id: "slimming-belt",
    name: "Slimming Belt",
    products: [
        { "id": "belt-1", "name": "Waist Trimmer Belt", "price": 1999, "brand": "Nike", "image": "/images/products/waist-trimmer-belt.jpg", "description": "Sweat-enhancing waist trimmer for better results." },
        { "id": "belt-2", "name": "Neoprene Slimming Belt", "price": 1699, "brand": "Adidas", "image": "/images/products/neoprene-slimming-belt.jpg", "description": "Comfortable neoprene belt for better weight loss." },
        { "id": "belt-3", "name": "Adjustable Slim Belt", "price": 1499, "brand": "Reebok", "image": "/images/products/adjustable-slim-belt.jpg", "description": "Custom-fit belt with secure velcro closure." },
        { "id": "belt-4", "name": "Compression Slimming Belt", "price": 1799, "brand": "Puma", "image": "/images/products/compression-slimming-belt.jpg", "description": "Firm compression belt for maximum support." }
      ],
  },
  "socks": {
    id: "socks",
    name: "Socks",
    products: [
        { "id": "sock-1", "name": "Ankle Sports Socks", "price": 499, "brand": "Nike", "image": "/images/products/ankle-sports-socks.jpg", "description": "Breathable ankle socks for gym workouts." },
        { "id": "sock-2", "name": "Compression Gym Socks", "price": 799, "brand": "Adidas", "image": "/images/products/compression-gym-socks.jpg", "description": "Compression socks for improved blood circulation." },
        { "id": "sock-3", "name": "Grip Training Socks", "price": 699, "brand": "Reebok", "image": "/images/products/grip-training-socks.jpg", "description": "Non-slip grip socks for yoga and gym exercises." },
        { "id": "sock-4", "name": "Cushioned Sports Socks", "price": 899, "brand": "Puma", "image": "/images/products/cushioned-sports-socks.jpg", "description": "Extra cushioned socks for better comfort and durability." }
      ],
  },
  "gym-west": {
    id: "gym-west",
    name: "Gym West",
    products: [
        { "id": "west-1", "name": "Sleeveless Gym Vest", "price": 1299, "brand": "Nike", "image": "/images/products/sleeveless-gym-vest.jpg", "description": "Lightweight and breathable gym vest." },
        { "id": "west-2", "name": "Compression Gym Vest", "price": 1599, "brand": "Adidas", "image": "/images/products/compression-gym-vest.jpg", "description": "Compression fit vest for better muscle support." },
        { "id": "west-3", "name": "Dri-Fit Gym Vest", "price": 1399, "brand": "Reebok", "image": "/images/products/dri-fit-gym-vest.jpg", "description": "Sweat-wicking fabric for a dry and comfortable workout." },
        { "id": "west-4", "name": "Loose Fit Gym Vest", "price": 1199, "brand": "Puma", "image": "/images/products/loose-fit-gym-vest.jpg", "description": "Loose fit for maximum airflow and comfort." }
      ],
  },
  "yoga-brick": {
    id: "yoga-brick",
    name: "Yoga Brick",
    products: [
      { id: "yoga-brick-1", name: "Premium Yoga Brick", brand: "YogaFlex", price: 1999, image: "/yoga-mat-1.jpg" },
      { id: "yoga-brick-2", name: "Non-Slip Yoga Brick", brand: "ZenMat", price: 2499, image: "/yoga-mat-2.jpg" },
      { id: "yoga-brick-3", name: "Extra Thick Yoga Brick", brand: "ComfortFlow", price: 2999, image: "/yoga-mat-3.jpg" },
      { id: "yoga-brick-4", name: "Travel Yoga Brick", brand: "YogaGo", price: 1799, image: "/yoga-mat-4.jpg" },
    ],
  },
  "foam-roller": {
    id: "foam-roller",
    name: "Foam Roller",
    products: [
      { id: "foam-roller-1", name: "Heavy-Duty Gym Foam Roller", brand: "GymMaster", price: 3999, image: "/gym-bag-1.jpg" },
      { id: "foam-roller-2", name: "Compact Foam Roller", brand: "FitPack", price: 2499, image: "/gym-bag-2.jpg" },
      { id: "foam-roller-3", name: "Ventilated Foam Roller", brand: "AirFlow", price: 2999, image: "/gym-bag-3.jpg" },
      { id: "foam-roller-4", name: "Water-Resistant Foam Roller", brand: "DryFit", price: 1999, image: "/gym-bag-4.jpg" },
    ],
  },
  "aerobic-stepper": {
    id: "aerobic-stepper",
    name: "Aerobic Stepper",
    products: [
        { "id": "stepper-1", "name": "Adjustable Aerobic Stepper", "price": 2499, "brand": "Nike", "image": "/images/products/adjustable-aerobic-stepper.jpg", "description": "Height adjustable aerobic stepper for effective workouts." },
        { "id": "stepper-2", "name": "Non-Slip Aerobic Step", "price": 2699, "brand": "Adidas", "image": "/images/products/non-slip-aerobic-step.jpg", "description": "Non-slip surface for safe and stable stepping exercises." },
        { "id": "stepper-3", "name": "Compact Workout Stepper", "price": 2299, "brand": "Reebok", "image": "/images/products/compact-workout-stepper.jpg", "description": "Compact and lightweight stepper for home workouts." },
        { "id": "stepper-4", "name": "Gym-Grade Aerobic Step", "price": 2999, "brand": "Puma", "image": "/images/products/gym-grade-aerobic-step.jpg", "description": "Professional gym-grade stepper for advanced training." }
      ],
  },
  "ankle-weights": {
    id: "ankle-weights",
    name: "Ankle Weights",
    products: [
        { "id": "ankle-weight-1", "name": "Adjustable Ankle Weights", "price": 1799, "brand": "Nike", "image": "/images/products/adjustable-ankle-weights.jpg", "description": "Adjustable weight ankle straps for resistance training." },
        { "id": "ankle-weight-2", "name": "Soft Neoprene Ankle Weights", "price": 1999, "brand": "Adidas", "image": "/images/products/neoprene-ankle-weights.jpg", "description": "Soft and comfortable ankle weights for workouts." },
        { "id": "ankle-weight-3", "name": "Weighted Ankle Straps", "price": 1599, "brand": "Reebok", "image": "/images/products/weighted-ankle-straps.jpg", "description": "Weighted straps for strength and endurance training." },
        { "id": "ankle-weight-4", "name": "Heavy Duty Ankle Weights", "price": 2199, "brand": "Puma", "image": "/images/products/heavy-duty-ankle-weights.jpg", "description": "Durable heavy-duty ankle weights for intense workouts." }
      ],
  },
  "loop-band": {
    id: "loop-band",
    name: "Loop Band",
    products: [
        { "id": "loop-band-1", "name": "Mini Loop Resistance Bands", "price": 999, "brand": "Nike", "image": "/images/products/mini-loop-resistance-bands.jpg", "description": "Set of 5 loop bands with different resistance levels." },
        { "id": "loop-band-2", "name": "Heavy Resistance Loop Band", "price": 1299, "brand": "Adidas", "image": "/images/products/heavy-resistance-loop-band.jpg", "description": "Heavy resistance loop band for muscle strengthening." },
        { "id": "loop-band-3", "name": "Fabric Loop Band", "price": 1499, "brand": "Reebok", "image": "/images/products/fabric-loop-band.jpg", "description": "Durable fabric band for comfortable resistance workouts." },
        { "id": "loop-band-4", "name": "Latex-Free Loop Band", "price": 1199, "brand": "Puma", "image": "/images/products/latex-free-loop-band.jpg", "description": "Latex-free material for allergy-safe training." }
      ],
  },
  "thera-band": {
    id: "thera-band",
    name: "Thera Band",
    products: [
        { "id": "thera-band-1", "name": "Light Thera Band", "price": 1399, "brand": "Nike", "image": "/images/products/light-thera-band.jpg", "description": "Light resistance thera band for rehabilitation exercises." },
        { "id": "thera-band-2", "name": "Medium Thera Band", "price": 1599, "brand": "Adidas", "image": "/images/products/medium-thera-band.jpg", "description": "Medium resistance band for strength training." },
        { "id": "thera-band-3", "name": "Heavy Thera Band", "price": 1799, "brand": "Reebok", "image": "/images/products/heavy-thera-band.jpg", "description": "Heavy resistance thera band for advanced workouts." },
        { "id": "thera-band-4", "name": "Extra-Heavy Thera Band", "price": 1999, "brand": "Puma", "image": "/images/products/extra-heavy-thera-band.jpg", "description": "Extra-heavy resistance for professional training." }
      ],
  },
  "chin-up-bar": {
    id: "chin-up-bar",
    name: "Chin Up Bar",
    products: [
        { "id": "chin-up-bar-1", "name": "Wall Mounted Chin Up Bar", "price": 3499, "brand": "Nike", "image": "/images/products/wall-mounted-chin-up-bar.jpg", "description": "Heavy-duty wall-mounted bar for upper body workouts." },
        { "id": "chin-up-bar-2", "name": "Doorway Chin Up Bar", "price": 2799, "brand": "Adidas", "image": "/images/products/doorway-chin-up-bar.jpg", "description": "Portable doorway bar for home workouts." },
        { "id": "chin-up-bar-3", "name": "Multi-Grip Chin Up Bar", "price": 3999, "brand": "Reebok", "image": "/images/products/multi-grip-chin-up-bar.jpg", "description": "Multi-grip design for varied workout options." },
        { "id": "chin-up-bar-4", "name": "Ceiling Mounted Chin Up Bar", "price": 4999, "brand": "Puma", "image": "/images/products/ceiling-mounted-chin-up-bar.jpg", "description": "Professional ceiling-mounted chin-up bar for intense training." }
      ],
  },
}

export default function SubCategoryPage() {
  const params = useParams()
  const { addItem, toggleWishlist, wishlist } = useCart()
  const { toast } = useToast()
  const [sortBy, setSortBy] = useState("name")

  const subcategory = categories[params.subcategory as keyof typeof categories]

  if (!subcategory) {
    return <div>Category not found</div>
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    toggleWishlist(product.id)
    toast({
      title: wishlist.includes(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${wishlist.includes(product.id) ? "removed from" : "added to"} your wishlist.`,
    })
  }

  const sortedProducts = [...subcategory.products].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "price") return a.price - b.price
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/fitness-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.2",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{subcategory.name}</h1>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600">{product.name}</h3>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="font-bold mt-2 text-2xl text-blue-600">Rs. {product.price.toLocaleString()}</p>
                  </div>
                </Link>
                <div className="flex gap-2 p-4 bg-gray-50">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleToggleWishlist(product)}
                    className="p-2 border rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

