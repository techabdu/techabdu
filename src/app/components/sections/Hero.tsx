'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HERO_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null)
    const headlineRef = useRef<HTMLHeadingElement>(null)
    const subheadingRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        if (!headlineRef.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            gsap.set(headlineRef.current, { opacity: 1, y: 0 })
            if (subheadingRef.current) {
                gsap.set(subheadingRef.current, { opacity: 1, y: 0 })
            }
            return
        }

        // Only animate after fonts are loaded for smooth text rendering
        document.fonts.ready.then(() => {
            // Headline animation
            gsap.fromTo(
                headlineRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: MOTION_CONFIG.ease.default,
                }
            )

            // Subheading animation (if present)
            if (subheadingRef.current && HERO_CONTENT.subheading) {
                gsap.fromTo(
                    subheadingRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: 0.5,
                        ease: MOTION_CONFIG.ease.default,
                    }
                )
            }
        })
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center px-6"
        >
            <div className="max-w-content w-full">
                <h1
                    ref={headlineRef}
                    className="text-display font-semibold text-foreground text-balance opacity-0"
                >
                    {HERO_CONTENT.headline}
                </h1>
                {HERO_CONTENT.subheading && (
                    <p
                        ref={subheadingRef}
                        className="text-body text-muted mt-4 max-w-prose opacity-0"
                    >
                        {HERO_CONTENT.subheading}
                    </p>
                )}
            </div>
        </section>
    )
}
