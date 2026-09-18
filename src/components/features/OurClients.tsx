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
          <strong className="text-[#38A5DC] font-semibold">3 partner pharmacies</strong>{' '}
          —and we&apos;re expanding rapidly to bring convenient healthcare access to more communities soon!
        </p>

        {/* 3 Clients directly on the page, with middle dividers on desktop */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          {PHARMACY_CLIENTS.map((client, index) => (
            <div
              key={client.name}
              className={`flex flex-col items-center text-center px-2 sm:px-6 ${
                index !== 0 ? 'md:border-l md:border-[#38A5DC]/30' : ''
              }`}
            >
              {/* Client Logo or Text Fallback */}
              <div className="h-16 sm:h-20 w-full flex items-center justify-center mb-6">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className={`max-h-full max-w-[200px] sm:max-w-[240px] w-auto object-contain ${client.logoClassName || ''}`}
                    style={client.logoStyle}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl sm:text-[28px] font-black text-[#38A5DC] tracking-tight leading-none uppercase">
                      {client.name.split(' ')[0]}
                    </h3>
                    <span className="text-[13px] sm:text-sm font-bold text-[#666666] tracking-[0.2em] uppercase mt-1.5 pl-[0.2em]">
                      {client.name.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Location Info */}
              <div className="flex flex-col items-center gap-2 md:gap-3 pt-1 w-full">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 object-contain"
                />
                <div className="flex flex-col items-center text-center w-full">
                  <p className="text-[#333333] text-[14px] sm:text-[15px] font-medium leading-snug w-full">
                    {client.address1}
                  </p>
                  <p className="text-[#777777] text-[13px] sm:text-[14px] leading-snug mt-1 max-w-[250px] mx-auto w-full">
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
