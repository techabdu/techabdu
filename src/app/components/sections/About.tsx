'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ABOUT_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG, BREAKPOINTS } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
    const containerRef = useRef<HTMLElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (prefersReducedMotion()) {
            // Set visible state for reduced motion
            if (textRef.current) gsap.set(textRef.current, { opacity: 1, y: 0 })
            if (imageRef.current) gsap.set(imageRef.current, { opacity: 1, y: 0 })
            return
        }

        const mm = gsap.matchMedia()

        // Desktop & Tablet: Full animations with parallax
        mm.add(`${BREAKPOINTS.desktop}, ${BREAKPOINTS.tablet}`, () => {
            // Text fade + translate
            if (textRef.current) {
                gsap.fromTo(
                    textRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            }

            // Image parallax (slight depth illusion)
            if (imageRef.current && containerRef.current) {
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0, scale: 0.98 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )

                // Subtle parallax on scroll
                gsap.to(imageRef.current, {
                    y: -30,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }
        })

        // Mobile: Simpler animations, no parallax
        mm.add(BREAKPOINTS.mobile, () => {
            if (imageRef.current) {
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            }

            if (textRef.current) {
                gsap.fromTo(
                    textRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: MOTION_CONFIG.duration.default,
                        delay: 0.1,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            }
        })

        return () => mm.revert()
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-20 md:py-32">
            <div className="max-w-content mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Portrait Image */}
                    <div
                        ref={imageRef}
                        className="relative aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg opacity-0"
                    >
                        {/* Placeholder for portrait image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-border">
                            <div className="text-center">
                                <span className="text-subtle text-small block">
                                    {/* Portrait Image */}
                                </span>
                                <span className="text-subtle text-small block mt-2 opacity-50">
                                    {/*ABOUT_CONTENT.portrait.width} × {ABOUT_CONTENT.portrait.height}*/}
                                </span>
                            </div>
                        </div>

                        {/* Uncomment when image is available */}
                        {<Image
                            src={ABOUT_CONTENT.portrait.src}
                            alt={ABOUT_CONTENT.portrait.alt}
                            width={ABOUT_CONTENT.portrait.width}
                            height={ABOUT_CONTENT.portrait.height}
                            className="object-cover w-full h-full"
                        />}
                    </div>

                    {/* Text Content */}
                    <div ref={textRef} className="space-y-6 opacity-0">
                        <h2 className="text-heading font-semibold text-foreground">
                            About
                        </h2>
                        <p className="text-body text-muted leading-relaxed max-w-prose">
                            {ABOUT_CONTENT.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
