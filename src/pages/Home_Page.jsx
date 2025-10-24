import '../App.css'
import About_Us from '../components/About_Us'
import Header from '../components/Header'
import Hero from '../components/Hero'

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