import { Link } from 'react-router-dom'
import logo from '../assets/svg/PhamaDali Logo v2.svg'
import phoneMockup from '../assets/img/markup-1.png'
import { WhyPharmaDali } from '../components/features/WhyPharmaDali'

export function Home() {
  return (
    <div className="relative w-full bg-white flex flex-col font-sans overflow-x-hidden">

      {/* Hero Section — minimum height ensures circle completes its bottom curve smoothly without clipping */}
      <section className="relative min-h-screen lg:min-h-[calc(1020 / 1920 * 100vw)] w-full flex flex-col justify-between">
        {/* Background Circle — exact Figma: X: 1060px, Y: -520px, 1500x1500px in 1920 space */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 'calc(1500 / 1920 * 100vw)',
              height: 'calc(1500 / 1920 * 100vw)',
              left: 'calc(1060 / 1920 * 100vw)',
              top: 'calc(-520 / 1920 * 100vw)',
              background: 'linear-gradient(to right, #96D2EE, #48AAD9)',
            }}
          />
        </div>

        {/* Header / Logo */}
        <header className="relative z-10 w-full px-8 sm:px-14 lg:px-20 xl:px-[10vw] pt-8 lg:pt-10 xl:pt-12">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="PharmaDali Logo"
              className="h-9 sm:h-11 lg:h-12 xl:h-[52px] w-auto object-contain"
            />
          </Link>
        </header>

        {/* Hero Section — 2 Columns (1920 Desktop Reference) */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 items-center w-full px-8 sm:px-14 lg:px-20 xl:px-[10vw] py-8 lg:py-0">

          {/* Left Column — Text Content vertically centered */}
          <div className="flex flex-col items-start text-left space-y-6 lg:space-y-8 max-w-xl xl:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] 2xl:text-[62px] font-semibold text-[#333333] leading-[1.18] tracking-tight">
              Mas pina<span className="text-[#FF4242]">dali</span>ng<br />
              pagbili ng gamot!
            </h1>

            <p className="text-[#888888] text-sm sm:text-base lg:text-base xl:text-lg max-w-md leading-relaxed font-normal">
              Iwas-pila sa botika! Order your medicines online through the PharmaDali App and pick them up at the Pharmacy when ready!
            </p>

            <div className="pt-1 sm:pt-2">
              <Link
                to="/install"
                className="inline-block bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-sm sm:text-base xl:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                Download the PharmaDali App
              </Link>
            </div>
          </div>

          {/* Right Column — Phone Mockup */}
          <div className="flex justify-center items-center relative py-6 lg:py-0">
            <img
              src={phoneMockup}
              alt="PharmaDali App Preview"
              className="w-auto h-[75vh] sm:h-[82vh] lg:h-[88vh] xl:h-[92vh] max-h-[920px] object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Why PharmaDali Section */}
      <WhyPharmaDali />

    </div>
  )
}
