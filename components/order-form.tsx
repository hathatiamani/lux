"use client"

import type React from "react"

import { useState } from "react"

const DELIVERY_FEE = 500 // DA

interface Product {
  id: string
  name: string
  price: number
}

interface OrderFormProps {
  product: Product
  onClose: () => void
}

export default function OrderForm({ product, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    deliveryType: "home",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ fullName: "", phoneNumber: "", city: "", deliveryType: "home" })
    }, 2000)
  }

  const total = product.price + DELIVERY_FEE

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-[#e5e3dc] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display text-4xl text-[#0a0a0a]">Order {product.name}</h2>
          <button onClick={onClose} className="text-2xl text-[#0a0a0a] hover:opacity-60 transition">
            ×
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <p className="font-display text-3xl mb-4 text-[#0a0a0a]">Thank You!</p>
            <p className="text-lg opacity-70">Your order has been placed successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Information */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-[#0a0a0a]">Customer Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#0a0a0a]">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#0a0a0a] bg-white text-[#0a0a0a] placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]"
                    placeholder="Ahmed moussa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#0a0a0a]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#0a0a0a] bg-white text-[#0a0a0a] placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]"
                    placeholder="+213 5XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#0a0a0a]">Select City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#0a0a0a] bg-white text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]"
                  >
                    <option value="">Choose a city</option>
                    <option value="algiers">Algiers</option>
                    <option value="oran">Oran</option>
                    <option value="constantine">Constantine</option>
                    <option value="tlemcen">Tlemcen</option>
                    <option value="setif">Sétif</option>
                    <option value="annaba">Annaba</option>
                    <option value="blida">Blida</option>
                    <option value="tizi-ouzou">Tizi Ouzou</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-[#0a0a0a]">Delivery Option</h3>
              <div className="space-y-3">
                <label
                  className="flex items-center p-4 border-2 border-[#0a0a0a] cursor-pointer hover:bg-white transition"
                  style={{ borderColor: formData.deliveryType === "home" ? "#0a0a0a" : "#d4d1c8" }}
                >
                  <input
                    type="radio"
                    name="deliveryType"
                    value="home"
                    checked={formData.deliveryType === "home"}
                    onChange={handleChange}
                    className="w-4 h-4 mr-3"
                  />
                  <span className="text-[#0a0a0a]">Home Delivery</span>
                </label>

                <label
                  className="flex items-center p-4 border-2 cursor-pointer hover:bg-white transition"
                  style={{ borderColor: formData.deliveryType === "office" ? "#0a0a0a" : "#d4d1c8" }}
                >
                  <input
                    type="radio"
                    name="deliveryType"
                    value="office"
                    checked={formData.deliveryType === "office"}
                    onChange={handleChange}
                    className="w-4 h-4 mr-3"
                  />
                  <span className="text-[#0a0a0a]">Office Delivery</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 border-2 border-[#0a0a0a]">
              <h3 className="font-display text-2xl mb-6 text-[#0a0a0a]">Order Summary</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="text-[#0a0a0a]">Product Price:</span>
                  <span className="font-semibold text-[#0a0a0a]">{product.price} DA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0a0a0a]">Delivery Fee:</span>
                  <span className="font-semibold text-[#0a0a0a]">{DELIVERY_FEE} DA</span>
                </div>
                <div className="border-t-2 border-[#0a0a0a] pt-3 flex justify-between">
                  <span className="font-semibold text-[#0a0a0a]">Total:</span>
                  <span className="font-display text-2xl text-[#0a0a0a]">{total} DA</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.fullName || !formData.phoneNumber || !formData.city}
              className="w-full bg-[#0a0a0a] text-[#e5e3dc] py-4 px-6 uppercase font-semibold hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              Complete Order
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
