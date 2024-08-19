"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
    const words = [
        { text: "Make", className: "text-white" },
        { text: "your", className: "text-white" },
        { text: "child", className: "text-white" },
        { text: "multilingual", className: "text-white" },
        { text: "at", className: "text-white" },
        { text: "Kids Paradise.", className: "text-orange-600" },
    ];

    return (
        <div className="relative aspect-[16/9]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-[url('/bg.png')]"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col  md:p-6 max-w-full md:max-w-2xl items-start justify-center h-full shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <p className="text-neutral-200 mb-2 text-base md:text-lg">
                    The journey begins from here.
                </p>
                <TypewriterEffectSmooth words={words} />

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4 w-full">
                    {/* Join Now Button */}
                    <a
                        href="https://api.whatsapp.com/send?phone=60187895960&text=hello%20i%20am%20interesed!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-40 h-10 rounded-xl bg-black text-white text-sm shadow-lg hover:bg-gray-800 flex items-center justify-center"
                    >
                        Join now
                    </a>

                    {/* Fee Structure Button */}
                    <a
                        href="/fee.pdf"
                        target="_blank"
                        className="w-full md:w-40 h-10 rounded-xl bg-white text-black border border-black text-sm shadow-lg hover:bg-gray-200 flex items-center justify-center"
                    >
                        Fee structure
                    </a>
                </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 z-0 transition-all duration-300 ease-in-out bg-black/50 hover:bg-transparent"></div>
        </div>
    );
}