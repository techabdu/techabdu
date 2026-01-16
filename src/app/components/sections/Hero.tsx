'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { HERO_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null)
    const headlineRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!headlineRef.current) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            gsap.set(headlineRef.current, { opacity: 1, y: 0 })
            return
        }

        // Set initial state
        gsap.set(headlineRef.current, { opacity: 0, y: 30 })

        // Animate after fonts are loaded
        document.fonts.ready.then(() => {
            gsap.to(headlineRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: MOTION_CONFIG.ease.default,
            })
        })
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center px-6"
        >
            <div className="max-w-content w-full">
                <h1
                    ref={headlineRef}
                    className="text-display font-semibold text-foreground text-balance"
                >
                    {HERO_CONTENT.headline}
                </h1>
                {HERO_CONTENT.subheading && (
                    <p className="text-body text-muted mt-4 max-w-prose">
                        {HERO_CONTENT.subheading}
                    </p>
                )}
            </div>
        </section>
    )
}
