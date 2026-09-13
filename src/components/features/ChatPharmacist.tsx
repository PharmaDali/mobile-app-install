import chatMockup from '../../assets/img/markup-3.png'
import { ScrollReveal } from '../common/ScrollReveal'

export function ChatPharmacist() {
  return (
    <section className="relative w-full pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-[10vw]">
        {/* Top Heading */}
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-[1.18] mb-12 lg:mb-16 text-center lg:text-left">
            May <span className="text-[#FF4242]">Tanong?</span>
            <br />
            Chat with a Pharmacist
          </h2>
        </ScrollReveal>
      </div>

      {/* Blue Full-Width Ribbon — Thinner Height */}
      <div className="w-full bg-[#38A5DC] py-6 sm:py-8 lg:py-10 relative">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-20 xl:px-[10vw] grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Side Content */}
          <ScrollReveal direction="right" className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left text-white z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2.5 tracking-tight">
              Ask. Get Guidance. Order with Confidence.
            </h3>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              Need help with your order or have a question about your medicine?
              <br className="hidden sm:inline" /> Connect with the pharmacy through the{' '}
              <strong className="font-semibold text-white">PharmaDali app.</strong>
            </p>
          </ScrollReveal>

          {/* Right Side Mockup — Larger with Dynamic Overlap */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end items-center relative z-20">
            <img
              src={chatMockup}
              alt="Chat with a Pharmacist Mockup"
              className="w-full max-w-[160px] sm:max-w-[260px] lg:max-w-[500px] xl:max-w-[560px] h-auto object-contain drop-shadow-2xl mt-4 sm:mt-8 lg:-mt-28 xl:-mt-32 lg:-mb-28 xl:-mb-32 transition-transform duration-500 hover:scale-105 ease-out"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
