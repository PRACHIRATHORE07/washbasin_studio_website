"use client";

import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl mx-auto overflow-hidden mask-image-linear-gradient-to-right-transparent-white-20%-white-80%-transparent ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start && "animate-scroll"} ${
          pauseOnHover && "hover:[animation-play-state:paused]"
        }`}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[500px] max-w-full flex flex-shrink-0 flex-col border border-b-0 border-gray-700 bg-gray-800 px-8 py-6 md:w-[550px] rounded-2xl"
            key={item.name}
          >
            <div className="flex items-start space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex flex-col flex-grow">
                <span className="text-sm leading-[1.6] text-gray-100 font-normal" style={{ fontFamily: 'Times New Roman' }}>
                  {item.quote}
                </span>
                <span className="mt-2 text-sm leading-[1.6] text-gray-400 font-bold">
                  - {item.name}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



