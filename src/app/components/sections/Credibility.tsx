'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CREDIBILITY_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Credibility() {
    const containerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!contentRef.current) return

        const items = contentRef.current.querySelectorAll('[data-credential]')

        // Handle reduced motion - make all elements visible
        if (prefersReducedMotion()) {
            items.forEach((item) => {
                gsap.set(item, { opacity: 1, y: 0 })
            })
            return
        }

        // Staggered fade-up animation for the entire content block
        gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: MOTION_CONFIG.duration.default,
                ease: MOTION_CONFIG.ease.default,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                },
            }
        )
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            className="py-16 md:py-24 border-t border-border"
        >
            <div className="max-w-content mx-auto px-6">
                {/* Single horizontal sequence, sentence-like flow */}
                <div
                    ref={contentRef}
                    className="flex flex-wrap items-baseline gap-x-1 gap-y-2"
                >
                    {/* Companies */}
                    {CREDIBILITY_CONTENT.companies.map((company, index) => (
                        <span key={company} data-credential className="inline-flex items-center opacity-0">
                            <span className="text-body text-foreground font-medium">
                                {company}
                            </span>
                            {index < CREDIBILITY_CONTENT.companies.length - 1 && (
                                <span className="mx-3 md:mx-4 text-subtle">·</span>
                            )}
                        </span>
                    ))}

                    {/* Separator */}
                    <span data-credential className="mx-3 md:mx-4 text-subtle opacity-0">—</span>

                    {/* Tagline */}
                    <span
                        data-credential
                        className="text-body text-subtle italic opacity-0"
                    >
                        {CREDIBILITY_CONTENT.tagline}
                    </span>
                </div>
            </div>
        </section>
    )
}
