import '../App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About_Us from '../components/About_Us'
import Projects from '../components/Projects'

export default function Home_Page() {
    return(
        <div className="w-full h-auto flex flex-col bg-[#F9EBD3]">
            <Header />
            <Hero />
            <About_Us />
            <Projects />
        </div>
    )
}