'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Ideally log to error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
            <h2 className="text-heading font-semibold mb-4 text-foreground">Something went wrong!</h2>
            <p className="text-body text-muted mb-8 max-w-md">
                We encountered an unexpected error. Please try again later.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium rounded-lg transition-all hover:bg-accent hover:text-foreground"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all hover:bg-border"
                >
                    Return Home
                </Link>
            </div>
        </div>
    )
}
