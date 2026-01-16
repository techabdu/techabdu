'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CTA_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function CTA() {
    const containerRef = useRef<HTMLElement>(null)
    const headlineRef = useRef<HTMLHeadingElement>(null)
    const buttonRef = useRef<HTMLAnchorElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isReducedMotion] = useState(() =>
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )

    // Section entrance animation
    useGSAP(() => {
        if (prefersReducedMotion()) {
            if (headlineRef.current) gsap.set(headlineRef.current, { opacity: 1, y: 0 })
            if (buttonRef.current) gsap.set(buttonRef.current, { opacity: 1, y: 0 })
            return
        }

        // CTA headline fade in
        if (headlineRef.current) {
            gsap.fromTo(
                headlineRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: MOTION_CONFIG.duration.default,
                    ease: MOTION_CONFIG.ease.default,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reset',
                    },
                }
            )
        }

        // Button fade in (slightly delayed)
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: MOTION_CONFIG.duration.default,
                    delay: 0.15,
                    ease: MOTION_CONFIG.ease.default,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reset',
                    },
                }
            )
        }
    }, { scope: containerRef })

    // Button hover micro-interaction
    useGSAP(() => {
        if (isReducedMotion || !buttonRef.current) return

        gsap.to(buttonRef.current, {
            scale: isHovered ? 1.03 : 1,
            duration: 0.2,
            ease: MOTION_CONFIG.ease.default,
        })
    }, [isHovered, isReducedMotion])

    return (
        <section
            ref={containerRef}
            className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-20 md:py-32"
        >
            <div className="max-w-prose mx-auto px-6 text-center space-y-8">
                <h2
                    ref={headlineRef}
                    className="text-heading font-semibold text-foreground opacity-0"
                >
                    {CTA_CONTENT.headline}
                </h2>

                <a
                    ref={buttonRef}
                    href={`mailto:${CTA_CONTENT.email}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="inline-block px-8 py-4 text-body font-medium text-background bg-foreground rounded-lg transition-colors hover:bg-accent hover:text-foreground opacity-0"
                >
                    {CTA_CONTENT.buttonText}
                </a>

                {/* Secondary email link */}
                <p className="text-small text-subtle pt-12">
                    &copy; 2026 techabdu. All rights reserved.
                </p>
            </div>
        </section>
    )
}
