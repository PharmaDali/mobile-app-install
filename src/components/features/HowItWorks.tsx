import { useState, useRef } from 'react'
import phoneMockupVideo from '../../assets/mp4/howitworks.mp4'
import { HOW_IT_WORKS_STEPS } from '../../constants/howItWorks'
import { ScrollReveal } from '../common/ScrollReveal'

export function HowItWorks() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative items-center">
          {/* Left Column — Phone Mockup */}
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="flex justify-center items-center z-10 w-full">
              <ScrollReveal direction="right" className="transition-all duration-500 group w-full flex justify-center">
                <div className="relative w-full max-w-[200px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden drop-shadow-2xl">
                  <div className="-mt-[9%] -mb-[12%]">
                    <video
                      ref={videoRef}
                      src={phoneMockupVideo}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-black/40 hover:bg-black/60 text-white p-2.5 sm:p-3 rounded-full backdrop-blur-md transition-all shadow-lg z-20 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                    )}
                  </button>
                </div>
              </ScrollReveal>
            </div>
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
                    <h3 className="text-[#38A5DC] text-base sm:text-xl font-bold mb-1.5 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] text-[12px] sm:text-[15px] lg:text-[15px] leading-relaxed font-normal">
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
