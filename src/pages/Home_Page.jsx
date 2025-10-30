import '../App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About_Us from '../components/About_Us'
import Footer from '../components/Footer'
import Contact_Me from '../components/Contact_Me'
import ProjectsSection from '../components/ProjectSection'

export default function Home_Page() {
    return(
        <div className="w-full h-auto flex flex-col bg-[#F9EBD3]">
            <Header />
            <Hero />
            <About_Us />
            <ProjectsSection />
            <Contact_Me />
            <Footer />
        </div>
    )
}