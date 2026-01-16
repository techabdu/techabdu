'use client'

import ScrollReveal from '@/app/components/motion/ScrollReveal'
import { CTA_CONTENT } from '@/lib/constants/content'

export default function CTA() {
    return (
        <ScrollReveal className="py-20 md:py-32 px-6" delay={0.1}>
            <div className="max-w-content mx-auto text-center">
                <h2 className="text-heading font-semibold text-foreground mb-8">
                    {CTA_CONTENT.headline}
                </h2>

                <a
                    href={`mailto:${CTA_CONTENT.email}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-medium rounded-full transition-all hover:opacity-90 hover:scale-105"
                >
                    Get in Touch
                </a>
            </div>
        </ScrollReveal>
    )
}
