'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PROCESS_PRINCIPLES } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Process() {
    const containerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const principles = containerRef.current?.querySelectorAll('[data-principle]')
        if (!principles) return

        // Handle reduced motion - make all elements visible
        if (prefersReducedMotion()) {
            principles.forEach((principle) => {
                gsap.set(principle, { opacity: 1, y: 0 })
            })
            return
        }

        principles.forEach((principle, index) => {
            gsap.fromTo(
                principle,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: MOTION_CONFIG.duration.max,
                    delay: index * 0.1,
                    ease: MOTION_CONFIG.ease.default,
                    scrollTrigger: {
                        trigger: principle,
                        start: 'top 75%',
                        toggleActions: 'play none none reset',
                    },
                }
            )
        })
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            className="py-20 md:py-32 bg-background"
        >
            <div className="max-w-prose mx-auto px-6">
                <h2 className="text-heading font-semibold mb-16 md:mb-24 text-foreground">
                    Principles
                </h2>

                <div className="space-y-12 md:space-y-16">
                    {PROCESS_PRINCIPLES.map((principle, index) => (
                        <div
                            key={index}
                            data-principle
                            className="py-6 md:py-8 opacity-0"
                        >
                            <div className="space-y-3">
                                {/* Principle Number */}
                                <span className="text-small text-subtle font-medium tracking-wider">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Principle Text */}
                                <p className="text-heading font-medium text-foreground text-balance leading-tight">
                                    {principle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
