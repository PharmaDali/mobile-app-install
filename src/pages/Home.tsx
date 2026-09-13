import { Link } from 'react-router-dom'
import logo from '../assets/svg/PhamaDali Logo v2.svg'
import phoneMockup from '../assets/img/markup-1.png'
import { WhyPharmaDali } from '../components/features/WhyPharmaDali'
import { HowItWorks } from '../components/features/HowItWorks'
import { ChatPharmacist } from '../components/features/ChatPharmacist'
import { OurClients } from '../components/features/OurClients'
import { FAQ } from '../components/features/FAQ'
import { DownloadCTA } from '../components/features/DownloadCTA'
import { ScrollReveal } from '../components/common/ScrollReveal'

export function Home() {
  return (
    <div className="relative w-full bg-white flex flex-col font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full flex flex-col justify-between"
        style={{ minHeight: 'max(100vh, calc(1020 / 1920 * 100vw))' }}
      >
        {/* Animated Background Blobs */}
        <div
          className="absolute top-0 right-0 lg:left-0 w-full pointer-events-none -z-0"
          style={{ height: 'max(100%, calc(1020 / 1920 * 100vw))' }}
          aria-hidden="true"
        >
          <div
            className="absolute rounded-full opacity-70 blur-[80px] sm:blur-[120px] pointer-events-none animate-blob
                       w-[400px] h-[400px] -top-[100px] -right-[150px]
                       sm:w-[600px] sm:h-[600px] sm:-top-[150px] sm:-right-[200px]
                       lg:w-[1000px] lg:h-[1000px] lg:left-[calc(1060/1920*100vw)] lg:top-[calc(-420/1920*100vw)]"
            style={{ background: '#96D2EE' }}
          />
          <div
            className="absolute rounded-full opacity-60 blur-[80px] sm:blur-[120px] pointer-events-none animate-blob-delayed
                       w-[350px] h-[350px] top-[100px] -right-[50px]
                       sm:w-[500px] sm:h-[500px] sm:top-[200px] sm:-right-[50px]
                       lg:w-[800px] lg:h-[800px] lg:left-[calc(1360/1920*100vw)] lg:top-[calc(-120/1920*100vw)]"
            style={{ background: '#48AAD9' }}
          />
        </div>

        {/* Header / Logo */}
        <header className="relative z-10 w-full px-5 sm:px-10 lg:px-20 xl:px-[10vw] pt-5 lg:pt-6 xl:pt-7">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="PharmaDali Logo"
              className="h-9 sm:h-11 lg:h-12 xl:h-[52px] w-auto object-contain"
            />
          </Link>
        </header>

        {/* Hero Section — 2 Columns (1920 Desktop Reference) */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 items-center w-full px-5 sm:px-10 lg:px-20 xl:px-[10vw] py-8 lg:py-0">

          {/* Left Column — Text Content vertically centered */}
          <ScrollReveal direction="right" className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-[40px] sm:text-5xl lg:text-[50px] xl:text-[58px] 2xl:text-[62px] font-semibold text-[#333333] leading-[1.1] sm:leading-[1.18] tracking-tight">
              Mas pina<span className="text-[#FF4242]">dali</span>ng<br />
              pagbili ng gamot!
            </h1>

            <p className="text-[#888888] text-sm sm:text-base lg:text-base xl:text-lg max-w-md leading-relaxed font-normal">
              Iwas-pila sa botika! Order your medicines online through the PharmaDali App and pick them up at the Pharmacy when ready!
            </p>

            <div className="pt-2 sm:pt-2 w-full sm:w-auto">
              <Link
                to="/install"
                className="block sm:inline-block w-full sm:w-auto text-center bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-base sm:text-base xl:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                Download the PharmaDali App
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column — Phone Mockup */}
          <ScrollReveal direction="left" delay={0.2} className="flex justify-center items-center relative py-6 lg:py-0">
            <img
              src={phoneMockup}
              alt="PharmaDali App Preview"
              className="w-auto h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-[88vh] xl:h-[92vh] max-h-[920px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
            />
          </ScrollReveal>

        </div>
      </section>

      {/* Why PharmaDali Section */}
      <WhyPharmaDali />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Chat with a Pharmacist Section */}
      <ChatPharmacist />

      {/* Our Clients Section */}
      <OurClients />

      {/* Frequently Asked Questions Section */}
      <FAQ />

      {/* Download CTA Section */}
      <DownloadCTA />

    </div>
  )
}
