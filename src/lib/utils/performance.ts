// Web Vitals tracking
export const reportWebVitals = (metric: {
    name: string
    value: number
    id: string
}) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(metric)
    }

    // Track to analytics in production
    // Verify against budgets:
    // - FCP < 1.5s
    // - LCP < 2.5s
    // - CLS = 0
    // - FID < 100ms
}

// Performance budget checker
export const checkPerformanceBudget = () => {
    if (typeof window === 'undefined') return

    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Check against budgets from PRD
            if (entry.duration > 150) {
                console.warn('JS execution exceeded budget:', entry)
            }
        }
    })

    observer.observe({ entryTypes: ['measure'] })
}
