import { Link } from 'react-router-dom'
import logo from '../assets/svg/PhamaDali Logo v2.svg'

export function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col font-sans">
      {/* Header / Logo */}
      <header className="relative z-10 w-full px-8 sm:px-12 lg:px-20 pt-8">
        <Link to="/" className="inline-block">
          <img src={logo} alt="PharmaDali Logo" className="h-10 sm:h-12 w-auto object-contain" />
        </Link>
      </header>

      {/* 404 Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 py-12">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#38A5DC] tracking-tight mb-4">
          4<span className="text-[#FF4242]">0</span>4
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-3">
          Naku! Hindi mahanap ang pahina.
        </h2>
        <p className="text-[#888888] text-base sm:text-lg max-w-md leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#38A5DC] hover:bg-[#2B94CC] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  )
}
