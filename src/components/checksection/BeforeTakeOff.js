import React from 'react'
import ChecklistBody from './ChecklistBody'

const BeforeTakeOff = () => {
  const items = [
    { c: 'Power Assurance', r: 'Perform', id: 1 },
    { c: 'Heater / Bleed Air', r: 'OFF', id: 2 },
    { c: 'ECL / Fuel Levers', r: 'FLY / DIRECT', id: 3 },
    { c: 'Caution Panel', r: 'Clear', id: 4 },
    { c: 'Engine Instruments', r: 'Check', id: 5 },
    { c: 'BEACON', r: 'ON', id: 6 },
    { c: 'Transponder', r: 'ON', id: 7 },
    { c: 'TCAS', r: 'ON', id: 8 },
    { c: 'Nose Wheel', r: 'Centred', id: 9 },
    { c: 'APs', r: 'ON', id: 10 },
    { c: 'ADELT', r: 'DPLY / ARM', id: 11 },
  ]
  return <ChecklistBody items={items} />
}

export default BeforeTakeOff
