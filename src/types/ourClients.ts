import type { CSSProperties } from 'react'

export interface PharmacyClient {
  name: string
  logo?: string
  logoClassName?: string
  logoStyle?: CSSProperties
  address1: string
  address2: string
}

