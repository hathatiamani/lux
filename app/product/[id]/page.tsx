"use client"

import { use, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import OrderForm from "@/components/order-form"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find((p) => p.id === id)
  const [showForm, setShowForm] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-[#e5e3dc] py-32 px-4">
        <Navigation />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl mb-4">Product Not Found</h1>
          <Link href="/shop" className="underline hover:opacity-60">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#e5e3dc] py-32 px-4 md:px-16">
      <Navigation />

      <div className="max-w-6xl mx-auto">
        <Link href="/shop" className="text-sm uppercase mb-12 inline-block hover:opacity-60 transition">
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="h-96 md:h-[500px] bg-white overflow-hidden relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase opacity-60 mb-4">{product.category}</p>
              <h1 className="font-display text-5xl md:text-6xl mb-6 text-[#0a0a0a]">{product.name}</h1>
              <p className="text-lg opacity-70 leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <p className="text-sm uppercase opacity-60 mb-2">Price</p>
                <p className="font-display text-4xl text-[#0a0a0a]">{product.price} DA</p>
              </div>

              <div className="space-y-3 mb-8 text-sm opacity-70">
                <p>✓ Premium handcrafted quality</p>
                <p>✓ Sustainable materials</p>
                <p>✓ Lifetime warranty</p>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#0a0a0a] text-[#e5e3dc] py-4 px-6 uppercase font-semibold hover:opacity-80 transition text-lg"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Order Form Modal */}
        {showForm && <OrderForm product={product} onClose={() => setShowForm(false)} />}
      </div>
    </main>
  )
}
