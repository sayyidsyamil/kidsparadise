"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased b items-center justify-center bg-[#E6B57B] relative overflow-hidden">
      <h2 className="text-4xl font-bold text-black mb-4">Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "“Thank you to all teachers in Kid Paradise JB for taking care and teaching my kid. My kid had a lot of improvement in terms of reading, counting and motor skills. Strongly recommend if given the chance.”",
    name: "Puan Aifa Syahirah",
  },
  {
    quote:
      "“Nice and good teacher. My daughter begins with zero and now she can write , speak Chinese and even discipline herself in just a few months. Congrats to all the teacher in Kids Paradise Preschool ! “",
    name: "Puan Annie Aznie",
  },
  {
    quote: "“Very good preschool. My son has had a tremendous improvement for his age (2.5y/o). He can write alphabets and numbers and recognises them. He speaks more than 3 words in once sentence. Thank you to all the teachers for all the efforts! Recommend 💯 to send your children here. “",
    name: "Puan Nisa Haleman",
  },
  {
    quote:
      "“Best Islamic-Mandarin preschool in JB”",
    name: "Puan Nurrulakhira",
  },
  {
    quote:
      "“Best place my kids ever been. They are always happy to go there. When I picked them up they were always in a good mood. All the teachers are very polite and attentive towards the kids. Highly recommended to send kids to this preschool “",
    name: "Encik Muhammad Fakhrullah",
  },
];
