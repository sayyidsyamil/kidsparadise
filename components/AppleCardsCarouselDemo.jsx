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
            <h2 className="max-w-7xl pl-4 mx-auto text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
                Events at Kids Paradise
            </h2>
            <Carousel items={cards} />
        </div>
    );
}


const data = [
    // Celebrations
    {
        category: "Hari Raya",
        title: "Hari Raya Celebration",
        src: "/raya.jpeg",
    },
    {
        category: "Chinese New Year",
        title: "Chinese New Year Celebration",
        src: "/cny.jpeg",
    },

    // School Trips
    {
        category: "Mosque Visit",
        title: "School Trip: Mosque Visit Day",
        src: "/mosque.jpeg",
    },
    {
        category: "Fruit Farm",
        title: "School Trip: Fruit Farm Tour",
        src: "/farm.jpg",
    },
    {
        category: "Indoor Playground",
        title: "School Trip: Indoor Playground",
        src: "/playground.jpg",
    },

    // Educational Activities
    {
        category: "Eye Screening",
        title: "Eye Screening Day at Kids Paradise",
        src: "/eye.jpg",
    },
    {
        category: "Class Activities",
        title: "Sensory Class Activities at Kids Paradise",
        src: "/class.jpg",
    },

    // Sports and Play
    {
        category: "Sports Day",
        title: "Kids Paradise Annual Sports Day",
        src: "/sports.jpg",
    },
    {
        category: "Messy Play",
        title: "Messy Play Day at Kids Paradise",
        src: "/messy.jpeg",
    },
];

