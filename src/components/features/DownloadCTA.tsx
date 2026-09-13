import { Link } from 'react-router-dom'
import phoneMockup from '../../assets/img/markup-4.png'

export function DownloadCTA() {
  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-32 px-6 sm:px-12 lg:px-20 xl:px-[10vw] bg-white overflow-hidden">
      {/* Background Circle — exact Figma: X: -462px, W: 1437px, H: 1242px */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 'calc(1437 / 1920 * 100vw)',
            height: 'calc(1242 / 1920 * 100vw)',
            left: 'calc(-462 / 1920 * 100vw)',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(135deg, #CEEEFA 0%, #A2DAF2 100%)',
            opacity: 0.85,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Left Column — Phone Mockup */}
        <div className="relative flex justify-center items-center">
          <img
            src={phoneMockup}
            alt="Download PharmaDali App Preview"
            className="w-full max-w-[200px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Right Column — Text Content & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-5xl font-bold text-[#38A5DC] tracking-tight leading-[1.18] mb-5">
            Ready to Make Your
            <br />
            Pharmacy Trip Easier?
          </h2>

          <div className="text-[#333333] font-bold text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
            <p>Order online. Get approved. Pay online.</p>
            <p>Pick up with ease.</p>
          </div>

          <div>
            <Link
              to="/install"
              className="inline-block bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-sm sm:text-base lg:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Download the PharmaDali App
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
