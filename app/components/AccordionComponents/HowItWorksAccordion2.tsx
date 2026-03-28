"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "@/app/constants/landing";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksAccordion2 = () => {
  const wrapperRef1 = useRef(null);
  const contentRef1 = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          pinSpacing: false,
          start: "top 10%",
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
        0.1,
      ).to(
        ".accordion",
        {
          marginBottom: 8,
          stagger: 0,
        },
        "<",
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      id="wrapper1"
      ref={wrapperRef1}
      className="md:pb-12 pt-0 overflow-hidden "
    >
      <div
        id="content1"
        className="container mx-auto max-w-7xl"
        ref={contentRef1}
        style={{ margin: "0 auto" }}
      >
        <div className="pin-wrapper1">
          <div id="accordion-anchor" className="h-px" />
          <div className="accordions space-y-8">
            {steps.map((step, idx) => (
              <div
                className="-p-4 bg-white mb-8 overflow-hidden accordion  rounded-xl sm:rounded-[40px]"
                key={idx}
              >
                <div className="overflow-hidden text rounded-xl sm:rounded-[40px]">
                  <div
                    key={step.id}
                    className="grid md:grid-cols-2  bg-white p-5 md:p-10 rounded-3xl gap-4 md:gap-6 items-center"
                  >
                    <div className="space-y-2.5">
                      <h2 className="text-greenish-cyan font-bold text-4xl md:text-[68px]">
                        {step.id}.
                      </h2>
                      <p className="text-black text-2xl md:text-4xl font-normal">
                        {step.title}
                      </p>
                    </div>

                    <div>
                      <Image
                        alt={`step-${step.id}`}
                        src={step.image}
                        className="rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksAccordion2;
