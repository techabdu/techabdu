import Hero from '@/app/components/sections/Hero'
import SelectedWork from '@/app/components/sections/SelectedWork'
import Process from '@/app/components/sections/Process'
import About from '@/app/components/sections/About'
import Credibility from '@/app/components/sections/Credibility'
import CTA from '@/app/components/sections/CTA'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SelectedWork />
      <Process />
      <About />
      <Credibility />
      <CTA />
    </main>
  )
}
