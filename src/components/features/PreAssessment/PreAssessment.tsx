import { ScrollReveal } from '../../common/ScrollReveal'

export function PreAssessment() {
  return (
    <section className="relative w-full py-12 px-5 sm:px-10 lg:px-20 xl:px-[10vw] bg-white">
      <div className="max-w-[1360px] mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-[#38A5DC] to-[#2B94CC] rounded-[24px] lg:rounded-[32px] p-8 sm:p-12 shadow-[0_15px_40px_rgba(56,165,220,0.2)] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2B94CC]/20">
            <div className="text-white text-center md:text-left flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                Pre-Assessment Form
              </h2>
              <p className="text-white/90 text-[13px] sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
                Take a quick pre-assessment to help us better understand your needs and serve you more effectively.
              </p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <a
                href="https://forms.gle/xu4qLhKdjFyQVsuW8"
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block w-full md:w-auto text-center bg-white text-[#38A5DC] hover:text-[#2B94CC] hover:bg-gray-50 font-bold text-base px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1"
              >
                Fill out the form
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
