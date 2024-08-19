"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { FlipWords } from "@/components/ui/flip-words";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import { ContactForm } from "@/components/ContactForm";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

const words = ["Bahasa", "English", "Mandarin"];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#F2D9BB]">
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md py-2" : "bg-black/95 py-2"
          } px-[10%] z-[100000]`}
      >
        <ul className="flex gap-6 text-white/80 font-semibold">
          {["Home", "Info", "Events", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">By</span>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Kids Paradise Logo"
              className="filter brightness-0 invert"
              width={80}
              height={24}
              priority
            />
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 hidden sm:block">
        <TypewriterEffectSmoothDemo />
      </section>

      {/* Info Section */}
      <section id="info" className="py-20">
        <div className="text-4xl mx-auto font-normal gap-2 text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-center mb-8">
          <div>Make</div>
          <div>Your</div>
          <div>Child</div>
          <div>Fluent</div>
          <div>in</div>
          <FlipWords words={words} />
        </div>

        <BentoGridDemo />
      </section>

      {/* Events Section */}
      <section id="events" className="py-10">
        <AppleCardsCarouselDemo />
      </section>

      <InfiniteMovingCardsDemo />

      {/* Contact Section */}
      <section id="contact" className="py-10">
        <ContactForm />
      </section>
    </main>
  );
}
