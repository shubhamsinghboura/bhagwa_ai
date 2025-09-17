// src/app/page.tsx

import Navbar from '@/components/layout/Navbar';
import BackgroundFlag from '@/components/ui/BackgroundFlag';
import CallToActionSection from '@/components/ui/CallToActionSection';
import FeaturesSection from '@/components/ui/FeaturesSection';
import HeroSection from '@/components/ui/HeroSection';


export default function Dashboard() {
  
  return( 
    <div>
    <BackgroundFlag/>
     <Navbar />
     <HeroSection/>
     <FeaturesSection/>
     <CallToActionSection/>
    </div>
  )
}