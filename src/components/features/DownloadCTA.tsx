import { Link } from 'react-router-dom'
import phoneMockup from '../../assets/img/markup-4.png'
import { ScrollReveal } from '../common/ScrollReveal'

export function DownloadCTA() {
  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-20 xl:px-[10vw] bg-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div
          className="absolute rounded-full opacity-60 blur-[80px] sm:blur-[120px] pointer-events-none animate-blob
                     top-1/2 -translate-y-1/2 w-[400px] h-[400px] -left-[100px]
                     sm:w-[600px] sm:h-[600px] sm:-left-[150px]
                     lg:w-[1000px] lg:h-[1000px] lg:left-[calc(-300/1920*100vw)]"
          style={{ background: '#CEEEFA' }}
        />
        <div
          className="absolute rounded-full opacity-60 blur-[80px] sm:blur-[120px] pointer-events-none animate-blob-delayed
                     top-1/2 -translate-y-1/2 w-[350px] h-[350px] left-[100px]
                     sm:w-[500px] sm:h-[500px] sm:left-[200px]
                     lg:w-[800px] lg:h-[800px] lg:left-[calc(200/1920*100vw)]"
          style={{ background: '#A2DAF2' }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Left Column — Phone Mockup */}
        <div className="relative flex justify-center items-center">
          <ScrollReveal direction="up" className="relative flex justify-center items-center">
            <img
              src={phoneMockup}
              alt="Download PharmaDali App Preview"
              className="w-full max-w-[200px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
            />
          </ScrollReveal>
        </div>

        {/* Right Column — Text Content & CTA */}
        <ScrollReveal direction="left" delay={0.2} className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-5xl font-bold text-[#38A5DC] tracking-tight leading-[1.18] mb-5">
            Ready to Make Your
            <br />
            Pharmacy Trip Easier?
          </h2>

          <div className="text-[#333333] font-bold text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
            <p>Order online. Get approved. Pay online.</p>
            <p>Pick up with ease.</p>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              to="/install"
              className="block sm:inline-block w-full sm:w-auto text-center bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-base sm:text-base lg:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Download the PharmaDali App
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
