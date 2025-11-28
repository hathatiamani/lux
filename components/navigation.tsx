"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="navbar absolute top-0 left-0 right-0 flex justify-between items-center px-4 md:px-16 py-8 text-sm md:text-lg uppercase font-semibold z-40">
      <Link href="/" className="font-display text-lg md:text-2xl">
        LUX
      </Link>
      <div className="flex gap-6 md:gap-12">
        <Link href="/shop" className={`hover:opacity-60 transition ${pathname === "/shop" ? "opacity-60" : ""}`}>
          Shop
        </Link>
        <Link href="/" className={`hover:opacity-60 transition ${pathname === "/" ? "opacity-60" : ""}`}>
          Home
        </Link>
      </div>
    </nav>
  )
}
