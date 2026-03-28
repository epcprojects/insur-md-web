"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AccordionItem {
  content: ReactNode;
}

interface HowItWorksAccordionProps {
  items: AccordionItem[];
}

const HowItWorksAccordion = ({ items }: HowItWorksAccordionProps) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          pinSpacing: false,
          start: "top 4%",
          end: "bottom 0px",
          scrub: 0.5, 
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        ".accordion .text",
        {
          height: 0,
          paddingBottom: 0,
          opacity: 0,
          stagger: 0.5,
          duration: 0.5,
        },
        0.1
      ).to(
        ".accordion",
        {
          marginBottom: 0,
          stagger: 0,
        },
        "<"
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      id="wrapper"
      ref={wrapperRef}
      className="!md:pb-12 pt-0 overflow-hidden bg-white"
    >
      <div
        id="content"
        className="container mx-auto max-w-7xl"
        ref={contentRef}
        style={{ margin: "0 auto" }}
      >
        <div className="pin-wrapper">
          <div id="accordion-anchor" className="h-px" />
          <div className="accordions">
            {items.map((item, idx) => (
              <div
                className="p-0 mb-4 overflow-hidden accordion rounded-xl sm:rounded-[40px]"
                key={idx}
              >
                <div className="overflow-hidden bg-white text space-y-8 rounded-xl sm:rounded-[40px]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksAccordion;