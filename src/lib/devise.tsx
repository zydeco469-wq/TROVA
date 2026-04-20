'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Devise = 'EUR' | 'USD' | 'DJF'

interface DeviseContextType {
  devise: Devise
  setDevise: (d: Devise) => void
  convertir: (prixEur: number) => string
}

const taux = {
  EUR: 1,
  USD: 1.08,
  DJF: 192.5,
}

const symboles = {
  EUR: '€',
  USD: '$',
  DJF: 'DJF',
}

const DeviseContext = createContext<DeviseContextType>({
  devise: 'EUR',
  setDevise: () => {},
  convertir: (p) => `${p.toFixed(2)} €`,
})

export function DeviseProvider({ children }: { children: ReactNode }) {
  const [devise, setDevise] = useState<Devise>('EUR')

  const convertir = (prixEur: number) => {
    const montant = prixEur * taux[devise]
    const symbole = symboles[devise]
    if (devise === 'DJF') return `${Math.round(montant).toLocaleString()} ${symbole}`
    return `${montant.toFixed(2)} ${symbole}`
  }

  return (
    <DeviseContext.Provider value={{ devise, setDevise, convertir }}>
      {children}
    </DeviseContext.Provider>
  )
}

export const useDevise = () => useContext(DeviseContext)

export function SelecteurDevise() {
  const { devise, setDevise } = useDevise()
  return (
    <select
      value={devise}
      onChange={(e) => setDevise(e.target.value as Devise)}
      style={{
        background: 'transparent',
        border: '0.5px solid rgba(184,150,110,0.4)',
        color: '#B8966E',
        padding: '0.4rem 0.8rem',
        fontSize: '0.68rem',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        fontFamily: 'Jost, sans-serif',
        outline: 'none',
      }}
    >
      <option value="EUR" style={{ background: '#0E0E0E' }}>EUR €</option>
      <option value="USD" style={{ background: '#0E0E0E' }}>USD $</option>
      <option value="DJF" style={{ background: '#0E0E0E' }}>DJF</option>
    </select>
  )
}
