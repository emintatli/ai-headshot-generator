import AdBanner from '@/components/elements/AdBanner'
import BackCloth from '@/components/elements/BackCloth'
import Examples from '@/components/elements/Examples'
import FAQ from '@/components/elements/FAQ'
import Footer from '@/components/elements/Footer'
import Hero from '@/components/elements/Hero'
import HowItWorks from '@/components/elements/HowItWorks'
import Navbar from '@/components/elements/Navbar'
import Pricing from '@/components/elements/Pricing'
import Testimonial from '@/components/elements/Testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Headshot Generator: Professional Headshots in Minutes | HeadShotRapid',
    description:
        'Professional AI Headshot Generator.Simply upload your photos and receive your customized headshots.No need for any physical shoot , headshots ready in 2 hours.Generate your professional headshots super easy.',
}

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <HowItWorks />
            <Examples />
            <BackCloth />
            {/* <Pricing /> */}
            <FAQ />
            <Testimonial />
            <AdBanner />
            <Footer />
        </>
    )
}
