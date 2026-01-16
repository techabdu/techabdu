'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MOTION_CONFIG } from '@/lib/constants/motion'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (!containerRef.current || !contentRef.current || hasAnimated) return

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            gsap.set(contentRef.current, { opacity: 1, y: 0 })
            setHasAnimated(true)
            return
        }

        const content = contentRef.current

        // Set initial state - hidden
        gsap.set(content, { opacity: 0, y: 60 })

        // Create scroll-triggered animation - ONE TIME only, stays visible
        const scrollTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 85%',  // Trigger when top of section reaches 85% down viewport
            once: true,        // Only trigger once, then stay visible
            onEnter: () => {
                gsap.to(content, {
                    opacity: 1,
                    y: 0,
                    duration: MOTION_CONFIG.duration.max,
                    delay: delay,
                    ease: MOTION_CONFIG.ease.default,
                    onComplete: () => setHasAnimated(true),
                })
            },
        })

        return () => {
            scrollTrigger.kill()
        }
    }, [delay, hasAnimated])

    return (
        <section ref={containerRef} className={className}>
            <div ref={contentRef}>
                {children}
            </div>
        </section>
    )
}
