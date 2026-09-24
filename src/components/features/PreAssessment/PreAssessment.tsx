import { ScrollReveal } from '../../common/ScrollReveal'
import pharmaDaliTextAssessment from './pharmaDaliTextAssessment.svg'

export function PreAssessment() {
  return (
    <section className="relative w-full py-12 px-5 sm:px-10 lg:px-20 xl:px-[10vw] bg-white">
      <div className="max-w-[1360px] mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-[#48AAD9] rounded-[16px] lg:rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(72,170,217,0.2)] flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-16">
            
            <div className="text-white text-left flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-bold mb-4 tracking-tight flex flex-wrap items-baseline gap-x-3 lg:gap-x-4 gap-y-1">
                <img 
                  src={pharmaDaliTextAssessment} 
                  alt="PharmaDali" 
                  className="h-[1.1em] w-auto inline-block object-contain select-none pointer-events-none"
                  style={{ verticalAlign: 'baseline' }}
                />
                <span className="leading-tight">values your feedback!</span>
              </h2>
              <p className="text-white/95 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-normal leading-[1.6] max-w-[800px]">
                Help us complete our Capstone Project! We are gathering feedback to better understand customer experiences with PharmaDali. Your insights will directly support our research and help us propose real-world improvements. Thank you for your time and support!
              </p>
            </div>

            <div className="w-full lg:w-auto mt-2 lg:mt-0 shrink-0">
              <a
                href="https://forms.gle/xu4qLhKdjFyQVsuW8"
                target="_blank"
                rel="noopener noreferrer"
                className="block lg:inline-block w-full lg:w-auto text-center bg-white text-[#38A5DC] hover:text-[#2B94CC] hover:bg-gray-50 font-bold text-base px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1"
              >
                Take the survey
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
