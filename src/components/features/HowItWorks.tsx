import phoneMockup from '../../assets/img/markup-2.png'
import { HOW_IT_WORKS_STEPS } from '../../constants/howItWorks'
import { ScrollReveal } from '../common/ScrollReveal'

export function HowItWorks() {
  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-20 xl:px-[10vw] bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38A5DC] text-center mb-14 lg:mb-20 tracking-tight">
            How It Works
          </h2>
        </ScrollReveal>

        {/* 2-Column Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative">
          {/* Left Column — Phone Mockup */}
          <div className="relative w-full">
            <ScrollReveal direction="right" className="flex justify-center items-center lg:sticky lg:top-32 z-10 transition-all duration-500">
              <img
                src={phoneMockup}
                alt="PharmaDali App How It Works Preview"
                className="w-full max-w-[200px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />
            </ScrollReveal>
          </div>

          {/* Right Column — Step List with Connected Badges */}
          <ScrollReveal direction="left" delay={0.2} className="flex flex-col w-full max-w-xl mx-auto lg:mx-0">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isLast = index === HOW_IT_WORKS_STEPS.length - 1
              return (
                <div key={step.number} className="relative flex items-start gap-5 sm:gap-6 pb-7 sm:pb-8 last:pb-0">
                  {/* Vertical connecting line between badge centers */}
                  {!isLast && (
                    <div
                      className="absolute left-5 sm:left-[22px] top-10 sm:top-11 bottom-0 w-[5px] sm:w-[6px] -translate-x-1/2 bg-[#C9EAF7]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Circular Number Badge — Perfectly Centered */}
                  <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#38A5DC] text-white font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-md shadow-[#38A5DC]/40 select-none leading-none">
                    <span className="flex items-center justify-center leading-none text-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Description */}
                  <div className="flex flex-col text-left pt-1">
                    <h3 className="text-[#38A5DC] text-lg sm:text-xl font-bold mb-1.5 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] text-[15px] sm:text-[15px] lg:text-[15px] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
