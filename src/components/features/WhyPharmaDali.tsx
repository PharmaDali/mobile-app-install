import orderOnlineIcon from '../../assets/svg/icons/order-online-icon.svg'
import skipQueueIcon from '../../assets/svg/icons/skip-queue-icon.svg'
import uploadRxIcon from '../../assets/svg/icons/upload-rx-icon.svg'
import payOnlineIcon from '../../assets/svg/icons/pay-online-icon.svg'
import pickupGoIcon from '../../assets/svg/icons/pickup-go-icon.svg'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  descriptionLine2?: string
  className?: string
}

function FeatureCard({ icon, title, description, descriptionLine2, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-[24px] lg:rounded-[28px] p-3.5 sm:p-5 lg:p-10 shadow-[0_12px_36px_rgba(72,170,217,0.1)] border border-[#EAF4FB] flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(72,170,217,0.16)] ${className}`}
    >
      <div className="mb-2.5 sm:mb-4 lg:mb-6 h-7 sm:h-9 lg:h-12 flex items-center">
        <img src={icon} alt={title} className="h-6 sm:h-8 lg:h-12 w-auto object-contain" />
      </div>
      <h3 className="text-[#38A5DC] text-sm sm:text-base lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 tracking-tight leading-snug">
        {title}
      </h3>
      <p className="text-[#777777] text-[11px] sm:text-xs lg:text-[15px] leading-normal sm:leading-relaxed font-normal">
        {description}
        {descriptionLine2 && (
          <>
            <br className="hidden sm:inline" />
            <span className="block mt-0.5 sm:mt-1">{descriptionLine2}</span>
          </>
        )}
      </p>
    </div>
  )
}

export function WhyPharmaDali() {
  const features = [
    {
      icon: orderOnlineIcon,
      title: 'Order Online',
      description: 'Your medicines, just a few taps away. Mag-order anytime through the PharmaDali app.',
      className: 'col-span-1 lg:col-span-2',
    },
    {
      icon: skipQueueIcon,
      title: 'Skip the Queue',
      description: 'Order ahead, save time. Iwas-pila at mag-order muna bago pumunta sa pharmacy.',
      className: 'col-span-1 lg:col-span-2',
    },
    {
      icon: uploadRxIcon,
      title: 'Upload Your Rx',
      description: 'Prescription ordering made easier. I-upload ang iyong prescription directly sa app for pharmacy review.',
      className: 'col-span-1 lg:col-span-2',
    },
    {
      icon: payOnlineIcon,
      title: 'Pay Online',
      description: 'Approved na? Pay with ease.',
      descriptionLine2: 'Once approved, you can pay for your order online through the app.',
      className: 'col-span-1 lg:col-span-3',
    },
    {
      icon: pickupGoIcon,
      title: 'Pick Up & Go',
      description: 'Ready na? Pick it up! Kunin ang iyong prepared order sa selected pharmacy— simple at convenient.',
      className: 'col-span-2 lg:col-span-3',
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-20 xl:px-[10vw] bg-gradient-to-b from-white via-[#EDF7FC]/70 to-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38A5DC] text-center mb-10 sm:mb-14 lg:mb-20 tracking-tight">
          Why PharmaDali?
        </h2>

        {/* Features Cards Grid:
            - Phone: 2x2 grid with "Pick Up & Go" fluid (col-span-2)
            - Desktop: 3 in top row (col-span-2/6 each) and 2 in bottom row (col-span-3/6 each)
        */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
