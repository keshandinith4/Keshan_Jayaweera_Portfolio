import '../App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About_Me from '../components/About_Me'
import Footer from '../components/Footer'
import Contact_Me from '../components/Contact_Me'
import ProjectsSection from '../components/ProjectSection'
import CertificatesSection from '../components/CertificatesSection'
import Letters from '../components/Projects_that_I_Led'

export default function Home_Page() {
    return(
        <div className="min-h-screen w-full flex flex-col bg-[#F9EBD3] overflow-x-hidden font-sans">
            <Header />
            <Hero />
            <About_Me />
            <ProjectsSection />
            <CertificatesSection />
            <Letters />
            <Contact_Me />
            <Footer />
        </div>
    )
}