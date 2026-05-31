'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Nadeem
                        </span>
                        . A Frontend Developer with 6+ years of experience in
                        building high-performance, scalable, and responsive web
                        solutions.
                    </p>
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                {/* Profile photo — temporarily hidden
                <div className="hidden md:block relative flex-shrink-0 self-center slide-up-and-fade mb-24">
                    <div className="absolute inset-0 border border-primary/40 translate-x-3 translate-y-3 pointer-events-none" />
                    <span className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-primary z-10" />
                    <span className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-primary z-10" />
                    <span className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-primary z-10" />
                    <span className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-primary z-10" />
                    <div className="relative w-[220px] xl:w-[260px] overflow-hidden">
                        <Image
                            src="/latest_me.png"
                            alt="Nadeem"
                            width={260}
                            height={347}
                            className="w-full aspect-[3/4] object-cover object-top grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                            priority
                        />
                        <div
                            className="absolute inset-0 pointer-events-none opacity-25"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 4px)',
                            }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                    </div>
                </div>
                */}

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            6+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            12K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
