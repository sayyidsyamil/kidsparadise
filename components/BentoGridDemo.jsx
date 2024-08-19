"use cleint";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaUserTie, FaUserGraduate } from 'react-icons/fa'; // Import the icons you need


import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full max-w-screen mx-auto px-[5%]">

      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const Leadership = () => (
  <div className="w-full p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <p className="flex items-center mb-4">
      <FaUserTie className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Director:</span>
      <span className="ml-2">Mr. Azhar Amirruddin</span>
    </p>
    <p className="flex items-center">
      <FaUserGraduate className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Principal:</span>
      <span className="ml-2">Mrs. Nur Ariysha Chong</span>
    </p>
  </div>
);
const Contact = () => (
  <div className="w-full p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <p className="flex items-center mb-2">
      <FaWhatsapp className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Phone:</span>
      <span className="ml-2">+6018-7895960</span>
    </p>
    <p className="flex items-center mb-2">
      <FaEnvelope className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Email:</span>
      <a href="mailto:kidsparadisecc@gmail.com" className="ml-2 text-blue-500 hover:underline">kidsparadisecc@gmail.com</a>
    </p>
    <p className="flex items-center mb-2">
      <FaInstagram className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Instagram:</span>
      <a href="https://instagram.com/kidsparadisejhb" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">@kidsparadisejhb</a>
    </p>
    <p className="flex items-center">
      <FaFacebook className="text-2xl text-black mr-4" />
      <span className="font-semibold text-gray-700">Facebook:</span>
      <span className="ml-2">Kids Paradise</span>
    </p>
  </div>
);

const Locate = () => (
  <div className="relative w-full p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <iframe
      className="absolute inset-0 w-full h-full rounded-lg border-0"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6,%20Jln%20Perjiranan%204/1+(Kids%20Paradise)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
);

const About = () => (
  <div className="relative w-full p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 bg-black/50 z-0 inset-0">
    <Image
      src="/about.jpg"
      alt="Islamic Mandarin Preschool"
      layout="fill" // Makes the image fill the container
      objectFit="cover" // Ensures the image covers the entire container
      // objectPosition="top" // Aligns the image content to the top
      className="rounded-lg" // Keeps the rounded corners
    />
  </div>
);

// Mission Statement:
// -Our mission is to nurture young minds in a safe, caring and culturally enriching environment where Islamic values and Mandarin language skills are developed

// //Vision Statement:
// -Our vision is to cultivate a generation of compassionate, multilingual,and confident young learners who are grounded in Islamic values, fluent Mandarin and equipped to thrive in a diverse and interconnected world.
// *if tak put also can

// Curriculum Overview:
// -Our curriculum is designed to provide a well-rounded education that fosters intellectual, creative and physical development. We offer a rich blend of language instruction in Bahasa Malaysia, English,and Mandarin, alongside foundational subjects such as Mathematics, Science, and STEM. Our program also introduces young learners to Computer Science, encouraging early technological literacy. Creative expression is nurtured through Art and Craft, while physical activities promote health and well-being. Additionally, we integrate moral and ethical teachings to support character development, ensuring a holistic approach to early education.

// Age Groups & Class Structures:
// 3 Years Old group (Kuai Le Class)
// 4 Years Old group (Xi Yue Class)
// 5 Years Old group (Huan Le Class)
// 6  Years Old group (Kuai Le Class)


const Mission = () => (
  <div className=" w-full  p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <p>Our mission is to nurture young minds in a safe, caring and culturally enriching environment where Islamic values and Mandarin language skills are developed</p>
  </div>
);

const Vision = () => (
  <div className=" w-full  p-4 min-h-[6rem] h-full rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <p>Our vision is to cultivate a generation of compassionate, multilingual,and confident young learners who are grounded in Islamic values, fluent Mandarin and equipped to thrive in a diverse and interconnected world.</p>
  </div>
);

const Curriculum = () => (
  <div className=" w-full p-4 min-h-[6rem] h-full  rounded-xl bg-gradient-to-br from-orange-100 to-orange-50">
    <p>Our curriculum offers a well-rounded education, blending language instruction in Bahasa Malaysia, English, and Mandarin with key subjects like Mathematics, Science, and STEM. We introduce young learners to Computer Science, nurture creativity through Art and Craft, and promote health through physical activities. We also integrate moral teachings to support character development, ensuring a holistic approach to early education.</p>
  </div>
);


const items = [
  {
    title: "Leadership",
    description: "Our experienced and caring staff are trained in early childhood education, fluent in Bahasa Malaysia, English, and Mandarin, and dedicated to fostering a nurturing and inclusive environment.",
    header: <Leadership />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contact Us",
    description: "Get in touch with us for more information or to schedule a visit.",
    header: <Contact />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Locate Us",
    description: "No 4-01 & No 6-01, Jalan Perjiranan 4/1, Bandar Dato Onn, 81100, Johor Bahru, Johor",
    header: <Locate />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About Us",
    description:
      "We are the premier Islamic Mandarin preschool, committed to strengthening your child's fundamentals before they confidently enter primary school. Our dedicated team is passionate about teaching and nurturing your child's growth.",
    header: <About />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Mission",
    description: "Empower your child to be the best version of themselves.",
    header: <Mission />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Vision",
    description: "Discover the endless possibilities that await your child.",
    header: <Vision />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Curriculum Overview",
    description: "Our curriculum is designed to provide a well-rounded education that fosters intellectual, creative and physical development.",
    header: <Curriculum />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];