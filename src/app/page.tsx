import dynamic from 'next/dynamic'
import Hero from '@/app/components/sections/Hero'

// Lazy load sections below the fold
const SelectedWork = dynamic(() => import('@/app/components/sections/SelectedWork'), {
  loading: () => <div className="min-h-[50vh]" />, // Placeholder to prevent layout shift
})
const Process = dynamic(() => import('@/app/components/sections/Process'), {
  loading: () => <div className="min-h-[30vh]" />,
})
const About = dynamic(() => import('@/app/components/sections/About'), {
  loading: () => <div className="min-h-[50vh]" />,
})
const Credibility = dynamic(() => import('@/app/components/sections/Credibility'), {
  loading: () => <div className="h-32" />,
})
const CTA = dynamic(() => import('@/app/components/sections/CTA'))

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <Hero />
      <SelectedWork />
      <Process />
      <About />
      <Credibility />
      <CTA />
    </main>
  )
}
