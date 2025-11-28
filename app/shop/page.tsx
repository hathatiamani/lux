"use client"

import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { products } from "@/lib/products"

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#e5e3dc] relative pb-0">
      <Navigation />

      <div className="max-w-7xl mx-auto py-32 px-4 md:px-16">
        <h1 className="font-display text-5xl md:text-7xl mb-4 text-[#0a0a0a] uppercase">Our Collection</h1>
        <p className="text-[#0a0a0a] text-lg mb-16 opacity-70">
          Discover our curated selection of premium crafted goods
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="relative h-96 bg-white overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-2 text-[#0a0a0a]">{product.name}</h2>
              <p className="text-[#0a0a0a] opacity-60 mb-2">{product.category}</p>
              <p className="font-semibold text-lg text-[#0a0a0a]">{product.price} DA</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
