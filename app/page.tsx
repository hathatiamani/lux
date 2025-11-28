"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Navigation from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const preLoaderRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const tl = gsap.timeline()

    tl.to(".header > h1", 2, {
      top: "0",
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    }).to(".pre-loader-btn", 0.3, {
      opacity: 1,
      delay: 2,
    })
  }, [hasAnimated])

  const handleClick = () => {
    setHasAnimated(true)
    const tl = gsap.timeline()

    tl.to(".pre-loader", 1, {
      opacity: 0,
      display: "none",
      ease: "power2.inOut",
    })

    tl.to(
      ".header-row",
      0.8,
      {
        top: "0",
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      },
      "-=1.2",
    )

    tl.from(
      ".navbar > *, .home-footer, .featured-section, .collection-section, .values-section",
      2,
      {
        y: "40",
        opacity: 0,
        ease: "power4.inOut",
        stagger: {
          amount: 0.15,
        },
      },
      "-=1",
    )
  }

  return (
    <>
      <div className="website-content min-h-screen bg-[#e5e3dc] relative pb-0">
        <Navigation />

        {/* Hero Section */}
        <div className="site-header">
          <div className="row">
            <div className="header-row">
              <span>discover</span>scents
            </div>
            <div className="header-row-wrapper"></div>
          </div>
          <div className="row">
            <div className="header-row">
              <span>timeless</span>fragrance
            </div>
            <div className="header-row-wrapper"></div>
          </div>
        </div>

        {/* Featured Products Section */}
<div className="featured-section px-6 md:px-12 py-16">
  <h2 className="font-display text-4xl md:text-6xl text-center mb-12 text-[#0a0a0a]">Signature Collection</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-full h-48  from-[#d4d1c8] to-[#e5e3dc] mb-4 flex items-center justify-center">
        <Image 
          src="https://i.pinimg.com/736x/07/64/e1/0764e143a42884ab98fc6935938649e2.jpg" 
          alt="Premium Essentials" 
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <h3 className="font-display text-2xl mb-2">Noir Essence</h3>
              <p className="text-[#666666] mb-4">Mysterious blend of oud and amber for evening elegance</p>
              <Link href="/shop" className="text-[#b8860b] font-semibold hover:text-[#0a0a0a] transition-colors">
                Discover Scent →
              </Link>
    </div>
    <div className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-full h-48  from-[#d4d1c8] to-[#e5e3dc] mb-4 flex items-center justify-center">
        <Image
          src="https://i.pinimg.com/1200x/eb/78/4f/eb784fbfe651a1976ffb17cce3866598.jpg" 
          alt="Luxury Collection" 
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <h3 className="font-display text-2xl mb-2">Rose Velvet</h3>
              <p className="text-[#666666] mb-4">Luxurious rose and sandalwood for timeless sophistication</p>
              <Link href="/shop" className="text-[#b8860b] font-semibold hover:text-[#0a0a0a] transition-colors">
                Explore Notes →
              </Link>
    </div>
    <div className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-full h-48  from-[#d4d1c8] to-[#e5e3dc] mb-4 flex items-center justify-center">
        <Image 
          src="https://i.pinimg.com/736x/6e/ed/32/6eed323f3ac470ea0ac323727d5df491.jpg" 
          alt="Curated Gifts" 
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>
     <h3 className="font-display text-2xl mb-2">Citrus Bloom</h3>
              <p className="text-[#666666] mb-4">Vibrant bergamot and white flowers for daytime radiance</p>
              <Link href="/shop" className="text-[#b8860b] font-semibold hover:text-[#0a0a0a] transition-colors">
                Experience →
              </Link>
    </div>
  </div>
</div>

        {/* Values Section */}
        <div className="values-section px-6 md:px-12 py-16 bg-[#f5f3f0]">
 <h2 className="font-display text-4xl md:text-6xl text-center mb-12 text-[#0a0a0a]">Our Essence</h2>          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
               <h3 className="font-display text-2xl mb-4 text-[#0a0a0a]">Perfume Craftsmanship</h3>
              <p className="text-[#666666] leading-relaxed">
                Each fragrance is meticulously crafted by master perfumers who believe in the art of scent composition and the power of intentional aromas.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-[#0a0a0a]">Natural Ingredients</h3>
              <p className="text-[#666666] leading-relaxed">
                We source the finest natural essences and essential oils, ensuring our luxury fragrances are as pure as they are captivating.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-[#0a0a0a]">Exclusive Blends</h3>
              <p className="text-[#666666] leading-relaxed">
                Limited edition collections ensure you wear something truly unique, designed for those who refuse to smell ordinary.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4 text-[#0a0a0a]">Longevity</h3>
              <p className="text-[#666666] leading-relaxed">
                Concentrated formulas and premium ingredients guarantee your scent lingers beautifully throughout the day.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
       <div className="collection-section px-6 md:px-12 py-16">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-[#0a0a0a]">Ready to Find Your Signature Scent?</h2>
            <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
              Discover our complete collection of luxury fragrances, each one a testament to olfactory artistry and timeless elegance.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#0a0a0a] text-[#e5e3dc] px-8 py-4 font-display text-lg hover:bg-[#333333] transition-colors"
            >
              Explore All Fragrances
            </Link>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="home-footer bg-[#0a0a0a] text-[#e5e3dc] py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-display text-2xl mb-4">LUX</h3>
                <p className="text-sm text-[#b8b8b8]">Luxury fragrances where elegance meets olfactory artistry.</p>
              </div>
              <div>
                <h4 className="font-display text-lg mb-4">Quick Links</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link href="/shop" className="text-[#b8b8b8] hover:text-[#e5e3dc] transition-colors">
                      Fragrances
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#b8b8b8] hover:text-[#e5e3dc] transition-colors">
                      Scent Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#b8b8b8] hover:text-[#e5e3dc] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg mb-4">Info</h4>
                <ul className="text-sm space-y-2">
                  <li className="text-[#b8b8b8]">Email: scent@luxpremium.com</li>
                  <li className="text-[#b8b8b8]">Phone: +213 723234345</li>
                  <li className="text-[#b8b8b8]">Based in Oran, Algeria</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#333333] pt-8 text-center text-sm text-[#b8b8b8]">
              <p>Crafted with passion. Designed to captivate. © 2025 LUX Fragrances. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Pre Loader */}
      <div
        ref={preLoaderRef}
        className="pre-loader fixed inset-0 bg-[#0a0a0a] text-[#e5e3dc] flex justify-center items-center z-50"
      >
        <div className="pre-loader-container flex flex-col justify-center items-center">
          <div className="pre-loader-header">
            <div className="header">
              <h1 className="font-display">Welcome to</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1 className="font-display" data-text="LUX">
                LUX
              </h1>
              &nbsp; &nbsp;
              <h1 className="font-display">Premium</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header">
              <h1 className="font-display">Crafted Goods</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header">
              <h1 className="font-display">Where elegance</h1>
              <div className="header-wrapper"></div>
            </div>
            <div className="header concat">
              <h1 className="font-display">meets</h1>
              &nbsp; &nbsp;
              <h1 className="font-display" data-text="craftsmanship">
                craftsmanship
              </h1>
              <div className="header-wrapper"></div>
            </div>
          </div>
          <div className="pre-loader-btn cursor-pointer opacity-0 mt-12 md:mt-16" onClick={handleClick}>
            <div className="btn text-center">
              Click 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 10" className="w-20 inline">
                <path fill="#e5e3dc" d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z"></path>
              </svg>
              to enter
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .website-content {
          position: relative;
          width: 100%;
          font-family: 'Roslindale Display Condensed', serif;
        }

        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2em 4em;
          text-transform: uppercase;
          font-size: 1.2rem;
          line-height: 90%;
          position: relative;
          z-index: 10;
        }

        .navbar > * {
          position: relative;
        }

.site-header {
  position: relative;
  width: 100%;
  padding: 4rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.row {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(3rem, 12vw, 8rem); /* Add min/max limits */
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: -0.4vw;
  max-width: 100vw; /* Ensure it doesn't exceed viewport */
}

.header-row-wrapper {
  content: '';
  position: absolute;
  top: 60px;
  left: 0; /* Remove negative positioning */
  width: 100%; /* Use 100% instead of 110% */
  // height: 100px;
  background: #e5e3dc;
  margin: 0 auto;
}

        .header-row {
          position: relative;
          line-height: 75%;
          top: 200px;
          transition: 1s;
        }



        .row:nth-child(1) {
          width: 100%;
        }

        .row:nth-child(2) {
          position: relative;
          width: 100%;
        }

        .row span {
          text-transform: lowercase;
          font-style: italic;
          font-weight: lighter;
          font-size: 4vw;
          padding: 0 1em 0 0.5em;
        }

        .row:nth-child(2) span {
          font-size: 9vw;
        }

        .featured-section {
          position: relative;
          z-index: 5;
        }

        .values-section {
          position: relative;
          z-index: 5;
        }

        .collection-section {
          position: relative;
          z-index: 5;
        }

        .home-footer {
          position: relative;
          z-index: 5;
        }

        .pre-loader {
          position: fixed;
          width: 100%;
          height: 100%;
          background: #0a0a0a;
          color: #e5e3dc;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 50;
        }

        .pre-loader-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .pre-loader-container .header {
          position: relative;
          width: max-content;
          margin: 0 auto;
        }

        .concat {
          display: flex;
        }

        .header h1 {
          position: relative;
          top: 125px;
          text-transform: uppercase;
          text-align: center;
          font-family: 'Roslindale Display Condensed', serif;
          font-weight: 500;
          font-size: 7vw;
          line-height: 90%;
          color: #0a0a0a;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
        }

        .header h1::before {
          content: attr(data-text);
          position: absolute;
          color: #e5e3dc;
          overflow: hidden;
          width: 0%;
          transition: 1s;
          animation: fill 2s cubic-bezier(0.6, 0, 0.4, 1) forwards;
          animation-delay: 2s;
        }

        @keyframes fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .header-wrapper::after {
          content: '';
          position: absolute;
          top: 120px;
          left: -20px;
          width: 110%;
          height: 120px;
          background: #0a0a0a;
          margin: 0 auto;
        }

        .pre-loader-btn {
          position: relative;
          margin: 3em 0 1em 0;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 2;
          opacity: 0;
        }

        .pre-loader-btn svg {
          position: relative;
          width: 80px;
          top: 0px;
          padding: 0 0.4em;
        }
      `}</style>
    </>
  )
}
