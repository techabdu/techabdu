'use client'

import ScrollReveal from '@/app/components/motion/ScrollReveal'
import { ABOUT_CONTENT } from '@/lib/constants/content'

export default function About() {
    return (
        <ScrollReveal className="py-20 md:py-32 px-6" delay={0.1}>
            <div className="max-w-content mx-auto">
                <h2 className="text-heading font-semibold text-foreground mb-8">
                    About
                </h2>

                <div className="grid gap-12 md:grid-cols-2 items-center">
                    {/* About image placeholder */}
                    <div className="aspect-square bg-border rounded-lg flex items-center justify-center">
                        <span className="text-subtle text-small">Portrait image</span>
                    </div>

                    <div>
                        <p className="text-body text-muted max-w-prose">
                            {ABOUT_CONTENT.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}
