import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MOTION_CONFIG, BREAKPOINTS } from '@/lib/constants/motion'

// Register plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Reduced motion check
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Standard fade in animation - animates TO visible state
export const fadeIn = (
    element: gsap.TweenTarget,
    options?: gsap.TweenVars
) => {
    if (prefersReducedMotion()) {
        gsap.set(element, { opacity: 1, y: 0 })
        return
    }

    // Use gsap.fromTo for reliable animation from hidden to visible
    return gsap.fromTo(element,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: MOTION_CONFIG.duration.default,
            ease: MOTION_CONFIG.ease.default,
            ...options,
        }
    )
}

// Stagger fade in - animates TO visible state
export const staggerFadeIn = (
    elements: gsap.TweenTarget,
    options?: gsap.TweenVars
) => {
    if (prefersReducedMotion()) {
        gsap.set(elements, { opacity: 1, y: 0 })
        return
    }

    // Use gsap.fromTo for reliable animation from hidden to visible
    return gsap.fromTo(elements,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: MOTION_CONFIG.duration.default,
            ease: MOTION_CONFIG.ease.default,
            stagger: 0.1,
            ...options,
        }
    )
}

// Responsive animation wrapper
export const createResponsiveAnimation = () => {
    const mm = gsap.matchMedia()

    return {
        add: (animations: {
            desktop?: () => void
            tablet?: () => void
            mobile?: () => void
        }) => {
            mm.add(BREAKPOINTS.desktop, animations.desktop || (() => { }))
            mm.add(BREAKPOINTS.tablet, animations.tablet || (() => { }))
            mm.add(BREAKPOINTS.mobile, animations.mobile || (() => { }))
        },
        revert: () => mm.revert(),
    }
}

// ScrollTrigger helper
export const createScrollTrigger = (
    trigger: string,
    animation: gsap.core.Animation,
    options?: ScrollTrigger.Vars
) => {
    if (prefersReducedMotion()) return

    return ScrollTrigger.create({
        trigger,
        animation,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options,
    })
}
