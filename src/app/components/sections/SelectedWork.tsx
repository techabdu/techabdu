'use client'

import ScrollReveal from '@/app/components/motion/ScrollReveal'
import { PROJECTS } from '@/lib/constants/content'

export default function SelectedWork() {
    return (
        <ScrollReveal className="py-20 md:py-32 px-6">
            <div className="max-w-content mx-auto">
                <h2 className="text-heading font-semibold text-foreground mb-12">
                    Selected Work
                </h2>

                {PROJECTS.length > 0 ? (
                    <div className="grid gap-16">
                        {/* Projects will be rendered here */}
                        <p className="text-muted">Projects coming soon...</p>
                    </div>
                ) : (
                    <p className="text-muted text-body">
                        Projects will be added during Phase 0 content production.
                    </p>
                )}
            </div>
        </ScrollReveal>
    )
}
