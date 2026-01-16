export const MOTION_CONFIG = {
    ease: {
        default: 'power3.out',
        smooth: 'power2.inOut',
    },
    duration: {
        min: 0.4,
        max: 0.8,
        default: 0.6,
    },
} as const

export const BREAKPOINTS = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
} as const
