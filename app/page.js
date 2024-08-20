"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { FlipWords } from "@/components/ui/flip-words";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import { ContactForm } from "@/components/ContactForm";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { motion } from "framer-motion";
import { LandingPage } from "@/components/LandingPage";
import { InfoSection } from "@/components/InfoSection";
import { Curriculum } from "@/components/Curriculum";
import { Location } from "@/components/Location";

const words = ["Bahasa", "English", "Mandarin"];

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 300,
    },
  }),
};

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
    <main className="flex min-h-screen flex-col bg-white">
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 transition-all duration-300 ${
          isScrolled ? "bg-orange-600/70 backdrop-blur-md py-2" : "bg-orange-600/95 py-2"
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
          <span className="text-white font-semibold hidden sm:block ">By</span>
          <a
            href="https://kidsparadise.vercel.app"
            target="_self"
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
      <section id="home" >
        <LandingPage />
      </section>

      <section id="info" >
        <div className="text-4xl pb-24 mx-auto font-normal gap-2 text-black flex flex-col sm:flex-row items-center justify-center ">
          {["Make", "Your", "Child", "Fluent", "in"].map((word, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="relative"
            >
              <motion.span
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 15, -15, 0],
                  transition: { type: "spring", stiffness: 200 },
                }}
                className="hover:text-orange-500"
              >
                {word}
              </motion.span>
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1.2, 1], rotateX: [0, 360] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FlipWords words={words} className="text-orange-500" />
          </motion.div>
        </div>
          
        {/* <BentoGridDemo /> */}
      </section>

      <InfoSection />

      <Curriculum/>

      <Location/>

      {/* Events Section */}
      <section id="events" className="py-10">
        <AppleCardsCarouselDemo />
      </section>

      <InfiniteMovingCardsDemo />

      {/* Contact Section */}
      <section id="contact" className="py-10">
        <ContactForm />
      </section>

      {/* Fixed WhatsApp button */}
      <a
        href="https://api.whatsapp.com/send?phone=60187895960&text" // Replace 'yourphonenumber' with your actual WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        className=" z-[10000] fixed bottom-4 right-4 p-3 bg-orange-600 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <svg
          className="w-12 h-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M16.1 15.1c-0.6-0.4-1.1-0.8-1.7-1.1-0.2-0.2-0.4-0.2-0.6-0.1-0.3 0.2-0.6 0.3-0.9 0.5-0.4 0.1-0.8 0.2-1.1 0.3-0.3 0.1-0.5 0.2-0.8 0.2-0.5 0-1-0.1-1.5-0.3-0.4-0.1-0.8-0.3-1.1-0.6-0.4-0.3-0.8-0.7-1.1-1.1-0.2-0.2-0.2-0.4-0.1-0.6 0.2-0.3 0.4-0.6 0.6-0.9 0.2-0.3 0.4-0.7 0.6-1 0.1-0.3 0.2-0.7 0.3-1 0.2-0.5 0.3-1 0.5-1.5 0.2-0.4 0.4-0.7 0.7-1 0.2-0.3 0.4-0.6 0.7-0.8 0.2-0.2 0.5-0.4 0.8-0.5 0.5-0.2 1-0.3 1.5-0.3 0.8 0 1.6 0.3 2.3 0.8 0.6 0.4 1.2 0.9 1.6 1.5 0.3 0.3 0.5 0.7 0.7 1.1 0.3 0.5 0.5 1 0.5 1.5-0.1 0.3-0.1 0.7-0.2 1.1-0.1 0.4-0.3 0.8-0.5 1.2-0.2 0.3-0.5 0.6-0.8 0.9-0.3 0.2-0.7 0.4-1.1 0.6-0.4 0.1-0.8 0.2-1.2 0.3-0.4 0.1-0.7 0.3-1.1 0.3-0.6 0-1.3-0.2-1.9-0.5z"
          />
        </svg>
      </a>
    </main>
  );
}
