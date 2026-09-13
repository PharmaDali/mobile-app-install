import { useState } from 'react'
import { FAQ_ITEMS } from '../../constants/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('how-to-order')

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="relative w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:px-[10vw] bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38A5DC] text-center mb-12 sm:mb-16 lg:mb-20 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-3xl flex flex-col gap-3.5 sm:gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#EAF4FB] shadow-[0_4px_20px_rgba(72,170,217,0.06)] overflow-hidden transition-all duration-200"
              >
                {/* Accordion Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none transition-colors hover:bg-[#F9FCFE]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-[17px] font-semibold text-[#333333] pr-4 leading-snug">
                    {item.question}
                  </span>
                  <span className="text-[#38A5DC] text-xl sm:text-2xl font-bold shrink-0 select-none w-6 h-6 flex items-center justify-center">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[#666666] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-left border-t border-slate-100/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

