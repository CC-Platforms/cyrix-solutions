"use client";

import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/extras/background-beams-with-collision";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl mx-auto py-16 md:py-20">
        <BackgroundBeamsWithCollision>
          <div className="text-center space-y-8 pb-20">
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>Elevate Your Business with Premium Software Solutions</h1>
            </div>
            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Cyrix Tech Solutions delivers custom websites and web apps that drive growth, streamline operations, and boost conversions for your business.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button
                className="w-5/6 md:w-1/4 font-bold group/arrow"
                asChild
                >
                <a href="#contact">
                  Let&apos;s Talk
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </a>
                </Button>

                <Button
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
                asChild
                >
                <a href="#portfolio">
                  Explore Our Work
                </a>
                </Button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        <div className="relative group">
          {/* blur effect */}
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/60 rounded-full blur-3xl"></div>
          {/* blur effect */}

          <Image
            width={1240}
            height={1200}
            className="w-full mx-auto rounded-lg relative rouded-lg leading-none flex items-center dark:hidden"
            src="/hero-image-light.png"
            alt="Cyrix Solutions website preview"
          />
          <Image
            width={1240}
            height={1200}
            className="w-full mx-auto rounded-lg relative rouded-lg leading-none dark:flex items-center hidden"
            src="/hero-image-dark.png"
            alt="Cyrix Solutions website preview"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-gradient-to-b from-background/0 via-background/60 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};