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
}

function FeatureCard({ icon, title, description, descriptionLine2 }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_12px_36px_rgba(72,170,217,0.1)] border border-[#EAF4FB] flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(72,170,217,0.16)]">
      <div className="mb-6 h-12 flex items-center">
        <img src={icon} alt={title} className="h-11 lg:h-12 w-auto object-contain" />
      </div>
      <h3 className="text-[#38A5DC] text-xl lg:text-2xl font-bold mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[#777777] text-sm lg:text-[15px] leading-relaxed font-normal">
        {description}
        {descriptionLine2 && (
          <>
            <br className="hidden sm:inline" />
            <span className="block mt-1">{descriptionLine2}</span>
          </>
        )}
      </p>
    </div>
  )
}

export function WhyPharmaDali() {
  const topFeatures = [
    {
      icon: orderOnlineIcon,
      title: 'Order Online',
      description: 'Your medicines, just a few taps away. Mag-order anytime through the PharmaDali app.',
    },
    {
      icon: skipQueueIcon,
      title: 'Skip the Queue',
      description: 'Order ahead, save time. Iwas-pila at mag-order muna bago pumunta sa pharmacy.',
    },
    {
      icon: uploadRxIcon,
      title: 'Upload Your Rx',
      description: 'Prescription ordering made easier. I-upload ang iyong prescription directly sa app for pharmacy review.',
    },
  ]

  const bottomFeatures = [
    {
      icon: payOnlineIcon,
      title: 'Pay Online',
      description: 'Approved na? Pay with ease.',
      descriptionLine2: 'Once approved, you can pay for your order online through the app.',
    },
    {
      icon: pickupGoIcon,
      title: 'Pick Up & Go',
      description: 'Ready na? Pick it up! Kunin ang iyong prepared order sa selected pharmacy— simple at convenient.',
    },
  ]

  return (
    <section className="relative w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:px-[10vw] bg-gradient-to-b from-white via-[#EDF7FC]/70 to-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38A5DC] text-center mb-14 lg:mb-20 tracking-tight">
          Why PharmaDali?
        </h2>

        {/* Features Cards Grid */}
        <div className="w-full flex flex-col gap-6 lg:gap-8">
          {/* Top Row — 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {topFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          {/* Bottom Row — 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {bottomFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

