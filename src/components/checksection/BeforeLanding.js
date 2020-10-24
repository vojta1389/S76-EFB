import React from 'react'
import ChecklistBody from './ChecklistBody'

const BeforeLanding = () => {
  const items = [
    { c: 'ECL / Fuel Levers', r: 'FLY / DIRECT', id: 1 },
    { c: 'Heater / Bleed Air', r: 'OFF', id: 2 },
    { c: 'Caution Panel', r: 'Check', id: 3 },
    { c: 'Engine Instruments', r: 'Check', id: 4 },
    { c: 'EAPS', r: 'ON', id: 5 },
    { c: 'Airspeed', r: '> 130 KIAS', id: 6 },
    { c: 'LDG Gear', r: 'DOWN', id: 7 },
    { c: 'LDG / Search Light', r: 'As Required', id: 8 },
    { c: 'Parking Brake', r: 'OFF', id: 9 }, // To be checked later OFF / ON??
  ]
  return <ChecklistBody items={items} />
}

export default BeforeLanding
