'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/lib/constants/content'
import { MOTION_CONFIG, BREAKPOINTS } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function SelectedWork() {
    const containerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        if (PROJECTS.length === 0) return

        // Handle reduced motion - make all elements visible
        if (prefersReducedMotion()) {
            PROJECTS.forEach((project, index) => {
                const projectEl = containerRef.current?.querySelector(
                    `[data-project="${index}"]`
                )
                const imageEl = projectEl?.querySelector('[data-image]')
                const textEl = projectEl?.querySelector('[data-text]')

                if (projectEl) gsap.set(projectEl, { opacity: 1 })
                if (imageEl) gsap.set(imageEl, { opacity: 1 })
                if (textEl) gsap.set(textEl, { opacity: 1, x: 0 })
            })
            return
        }

        const mm = gsap.matchMedia()

        // Desktop: Scale + slide animations for image and text
        mm.add(BREAKPOINTS.desktop, () => {
            PROJECTS.forEach((project, index) => {
                const projectEl = containerRef.current?.querySelector(
                    `[data-project="${index}"]`
                )
                const imageEl = projectEl?.querySelector('[data-image]')
                const textEl = projectEl?.querySelector('[data-text]')

                if (!projectEl || !imageEl || !textEl) return

                // First, make the article visible
                gsap.set(projectEl, { opacity: 1 })

                // Image scale animation
                gsap.fromTo(
                    imageEl,
                    { scale: 0.98, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: projectEl,
                            start: 'top 80%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )

                // Text slide animation (opposite direction of scroll)
                gsap.fromTo(
                    textEl,
                    { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: projectEl,
                            start: 'top 80%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            })
        })

        // Tablet: Similar to desktop but simpler
        mm.add(BREAKPOINTS.tablet, () => {
            PROJECTS.forEach((project, index) => {
                const projectEl = containerRef.current?.querySelector(
                    `[data-project="${index}"]`
                )

                if (!projectEl) return

                gsap.fromTo(
                    projectEl,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: projectEl,
                            start: 'top 85%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            })
        })

        // Mobile: Simple fades only
        mm.add(BREAKPOINTS.mobile, () => {
            PROJECTS.forEach((project, index) => {
                const projectEl = containerRef.current?.querySelector(
                    `[data-project="${index}"]`
                )

                if (!projectEl) return

                gsap.fromTo(
                    projectEl,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: MOTION_CONFIG.duration.default,
                        ease: MOTION_CONFIG.ease.default,
                        scrollTrigger: {
                            trigger: projectEl,
                            start: 'top 85%',
                            toggleActions: 'play none none reset',
                        },
                    }
                )
            })
        })

        return () => mm.revert()
    }, { scope: containerRef })

    // Show placeholder if no projects
    if (PROJECTS.length === 0) {
        return (
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-content mx-auto">
                    <h2 className="text-heading font-semibold text-foreground mb-12">
                        Selected Work
                    </h2>
                    <p className="text-muted text-body">
                        Projects will be added during Phase 0 content production.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section ref={containerRef} className="py-20 md:py-32">
            <div className="max-w-content mx-auto px-6">
                <h2 className="text-heading font-semibold mb-16 text-foreground">
                    Selected Work
                </h2>

                <div className="space-y-24 md:space-y-32">
                    {PROJECTS.map((project, index) => (
                        <article
                            key={project.id}
                            data-project={index}
                            className="lg:opacity-100 opacity-0"
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                                {/* Image Container */}
                                <div
                                    data-image
                                    className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-border lg:opacity-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                                        }`}
                                >
                                    {/* Placeholder for when image is not available */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-border">
                                        <span className="text-subtle text-small">
                                            {/*project.image.alt || 'Project Image'*/}
                                        </span>
                                    </div>

                                    {/* Uncomment when images are available */}
                                    {<Image
                                        src={project.image.src}
                                        alt={project.image.alt}
                                        width={project.image.width}
                                        height={project.image.height}
                                        className="object-cover w-full h-full"
                                        priority={index === 0}
                                    />}
                                </div>

                                {/* Text Content */}
                                <div
                                    data-text
                                    className={`space-y-4 lg:opacity-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                                        }`}
                                >
                                    <span className="text-small text-subtle uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-heading font-medium text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-body text-muted">
                                        {project.insight}
                                    </p>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-body text-accent hover:underline mt-4"
                                        >
                                            View Project
                                            <svg
                                                className="ml-2 w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
