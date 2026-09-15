import puremedLogo from '../assets/svg/puremed-logo.svg'
import landichoLogo from '../assets/svg/landichods-logo.svg'
import type { PharmacyClient } from '../types/ourClients'

export const PHARMACY_CLIENTS: PharmacyClient[] = [
  {
    name: 'PureMed Pharmacy',
    logo: puremedLogo,
    address1: 'Pob. 5, Tanauan City, Batangas',
    address2: 'In front of Tanauan Medical Center',
  },
  {
    name: 'Landicho Drugstore',
    logo: landichoLogo,
    address1: 'Brgy. Banadero, Tanauan City, Batangas',
    address2: 'In front of Covered Court',
  },
  {
    name: 'Calloway Pharmacy',
    address1: 'Pob. 3, Tanauan City, Batangas',
    address2: 'Across the street, near Healthway DMMC.',
  },
]

