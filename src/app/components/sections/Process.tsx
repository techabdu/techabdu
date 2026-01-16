'use client'

import ScrollReveal from '@/app/components/motion/ScrollReveal'
import { PROCESS_PRINCIPLES } from '@/lib/constants/content'

export default function Process() {
    return (
        <ScrollReveal className="py-20 md:py-32 px-6 bg-background" delay={0.1}>
            <div className="max-w-content mx-auto">
                <h2 className="text-heading font-semibold text-foreground mb-12">
                    Process
                </h2>

                {PROCESS_PRINCIPLES.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {PROCESS_PRINCIPLES.map((principle, index) => (
                            <div key={index} className="p-6 border border-border rounded-lg">
                                <p className="text-body text-muted">{principle}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted text-body">
                        Process principles will be added during Phase 0 content production.
                    </p>
                )}
            </div>
        </ScrollReveal>
    )
}
