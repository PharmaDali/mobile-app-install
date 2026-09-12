import { Link } from 'react-router-dom'
import logo from '../assets/svg/PhamaDali Logo v2.svg'
import phoneMockup from '../assets/img/markup-1.png'

export function Home() {
  return (
    <div className="relative w-full bg-white flex flex-col font-sans">

      {/* Background Circle — scaled from 1280x800 design to 1920x1080 target
          Original: X:663 Y:-436 Size:1500px → scaled by 1.5x (width) / 1.35x (height) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            width: '208vh',
            height: '208vh',
            left: '52vw',
            top: '-55vh',
            background: 'linear-gradient(to right, #96D2EE, #48AAD9)',
          }}
        />
      </div>

      {/* Header / Logo */}
      <header className="relative z-10 w-full px-12 lg:px-20 xl:px-28 pt-10">
        <Link to="/" className="inline-block">
          <img src={logo} alt="PharmaDali Logo" className="h-12 xl:h-14 w-auto object-contain" />
        </Link>
      </header>

      {/* Hero Section — two equal columns, 1920px desktop target */}
      <div className="relative z-10 grid grid-cols-2 w-full min-h-[calc(100vh-72px)]">

        {/* Left Column — text content, vertically centered */}
        <div className="flex flex-col justify-center items-start text-left space-y-8 px-12 lg:px-20 xl:px-28 -mt-20">
          <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-[#333333] leading-[1.15] whitespace-nowrap">
            Mas pina<span className="text-[#FF4242]">dali</span>ng<br />
            pagbili ng gamot!
          </h1>

          <p className="text-[#888888] text-base xl:text-lg max-w-sm leading-relaxed">
            Iwas-pila sa botika! Order your medicines online through the PharmaDali App and pick them up at the Pharmacy when ready!
          </p>

          <div>
            <Link
              to="/install"
              className="inline-block bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-base xl:text-lg px-12 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Download the PharmaDali App
            </Link>
          </div>
        </div>

        {/* Right Column — phone mockup */}
        <div className="flex justify-center items-center py-8">
          <img
            src={phoneMockup}
            alt="PharmaDali App Preview"
            className="w-auto h-[90vh] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  )
}
