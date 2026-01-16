'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    as?: 'section' | 'div' | 'article'
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    as: Component = 'section'
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current || !contentRef.current) return

        if (prefersReducedMotion()) {
            gsap.set(contentRef.current, { opacity: 1, y: 0 })
            return
        }

        const content = contentRef.current

        // Set initial state - hidden
        gsap.set(content, { opacity: 0, y: 40 })

        // Create scroll-triggered animation
        gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: MOTION_CONFIG.duration.max,
            delay: delay,
            ease: MOTION_CONFIG.ease.default,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        })
    }, { scope: containerRef, dependencies: [delay] })

    // Use dynamic component based on 'as' prop
    const Wrapper = Component as keyof JSX.IntrinsicElements

    return (
        <Wrapper ref={containerRef as React.RefObject<HTMLElement>} className={className}>
            <div ref={contentRef}>
                {children}
            </div>
        </Wrapper>
    )
}
