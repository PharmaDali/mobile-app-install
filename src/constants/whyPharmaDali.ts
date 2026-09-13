import orderOnlineIcon from '../assets/svg/icons/order-online-icon.svg'
import skipQueueIcon from '../assets/svg/icons/skip-queue-icon.svg'
import uploadRxIcon from '../assets/svg/icons/upload-rx-icon.svg'
import payOnlineIcon from '../assets/svg/icons/pay-online-icon.svg'
import pickupGoIcon from '../assets/svg/icons/pickup-go-icon.svg'
import type { FeatureItem } from '../types/whyPharmaDali'

export const WHY_PHARMADALI_FEATURES: FeatureItem[] = [
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
    className: 'col-span-1 sm:col-span-2 lg:col-span-3',
  },
]

