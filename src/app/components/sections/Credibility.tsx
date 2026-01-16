'use client'

import ScrollReveal from '@/app/components/motion/ScrollReveal'
import { CREDIBILITY_CONTENT } from '@/lib/constants/content'

export default function Credibility() {
    return (
        <ScrollReveal className="py-20 md:py-32 px-6 border-t border-border" delay={0.1}>
            <div className="max-w-content mx-auto">
                {/* Single horizontal sequence, sentence-like flow */}
                <p className="text-body text-muted">
                    {CREDIBILITY_CONTENT.companies.map((company, index) => (
                        <span key={company}>
                            <span className="text-foreground font-medium">{company}</span>
                            {index < CREDIBILITY_CONTENT.companies.length - 1 && (
                                <span className="mx-4 text-subtle">·</span>
                            )}
                        </span>
                    ))}
                    <span className="mx-4 text-subtle">—</span>
                    <span className="text-subtle italic">{CREDIBILITY_CONTENT.tagline}</span>
                </p>
            </div>
        </ScrollReveal>
    )
}
