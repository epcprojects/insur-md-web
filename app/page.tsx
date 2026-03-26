"use client"
import Image from "next/image";
import { images } from "./ui";

export default function Home() {
  return (
   <main>
    <section className="bg-ceramic pt-24 pb-14 relative">
          <div className="container max-w-7xl mx-auto px-8 ">
              <div>
                <p>From referral to</p>
              </div>
          </div>
          <Image src={images.howitworksimages.PersonStandingImage} alt={"Person Standing"} className="absolute  right-0 bottom-0"/>
    </section>
   </main>
  );
}
