import React from 'react'
import { Navbar } from '../../components/Start/Navbar/Navbar'
import { LandingSection } from '../../components/Start/LandingSection/LandingSection'
import { PartnersSection } from '../../components/Start/PartnersSection/PartnersSection'
import { ServiceSection } from '../../components/Start/ServiceSection/ServiceSection'
import { TeamSection } from '../../components/Start/TeamSection/TeamSection'
import { Footer } from '../../components/Start/Footer/Footer'

export const Start = () => {
  return (
    <div>
        <Navbar />
        <LandingSection />
        <PartnersSection />
        <ServiceSection />
        <TeamSection />
        <Footer />
    </div>
  )
}
