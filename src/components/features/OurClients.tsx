import locationIcon from '../../assets/svg/icons/location-icon.svg'
import { PHARMACY_CLIENTS } from '../../constants/ourClients'

export function OurClients() {
  return (
    <section className="relative w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:px-[10vw] bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#38A5DC] text-center mb-4 tracking-tight">
          Our Clients
        </h2>

        {/* Subtitle */}
        <p className="text-[#666666] text-sm sm:text-base max-w-2xl text-center mb-16 lg:mb-24 leading-relaxed font-normal">
          As a growing platform in our first year, we are proud to launch with{' '}
          <strong className="text-[#38A5DC] font-semibold">2 partner pharmacies</strong>{' '}
          —and we&apos;re expanding rapidly to bring convenient healthcare access to more communities soon!
        </p>

        {/* 2 Clients directly on the page (no cards), with middle divider */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Vertical Divider between clients on desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-2 bottom-6 w-[2px] -translate-x-1/2 bg-[#38A5DC]/30"
            aria-hidden="true"
          />

          {PHARMACY_CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-8"
            >
              {/* Client Logo */}
              <div className="h-16 sm:h-20 w-full flex items-center justify-center md:justify-start mb-6">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-[220px] sm:max-w-[260px] w-auto object-contain"
                />
              </div>

              {/* Location Info */}
              <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3.5 pt-1">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0 md:mt-0.5 object-contain"
                />
                <div className="flex flex-col text-center md:text-left">
                  <p className="text-[#333333] text-[14px] sm:text-[15px] font-medium leading-snug">
                    {client.address1}
                  </p>
                  <p className="text-[#777777] text-[13px] sm:text-[14px] leading-snug mt-1">
                    {client.address2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
