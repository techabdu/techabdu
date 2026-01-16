import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
            <h2 className="text-display font-semibold mb-4 text-foreground">404</h2>
            <p className="text-body text-muted mb-8 max-w-md">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-medium rounded-full transition-all hover:opacity-90"
            >
                Return Home
            </Link>
        </div>
    )
}
