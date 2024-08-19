"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  // Split text inside of words into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div className="inline">
        {wordsArray.map((word, idx) => (
          <span key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`dark:text-white text-black`, word.className)}
              >
                {char}
              </span>
            ))}
            {/* Adding a space after each word */}
            {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};
