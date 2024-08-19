"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Events at Kids Paradise
            </h2>
            <Carousel items={cards} />
        </div>
    );
}



const data = [
    {
        category: "Mosque Visit",
        title: "Mosque Visit Day at Kids Paradise",
        src: "/mosque.jpeg",
    },
    {
        category: "Hari Raya Celebration",
        title: "Hari Raya Celebration Day at Kids Paradise",
        src: "/raya.jpeg",
    },
    {
        category: "Sports Day",
        title: "Kids Paradise Sports Day 2022",
        src: "/sports.jpg",
    },
    {
        category: "Messy Play",
        title: "Messy Play Day at Kids Paradise",
        src: "/messy.jpeg",
    },
    {
        category: "Eye Screening",
        title: "Eye Screening Day at Kids Paradise",
        src: "/eye.jpg",
    },



];
