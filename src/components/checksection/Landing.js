import React from 'react'
import ChecklistBody from './ChecklistBody'

const Landing = () => {
  const items = [
    { c: 'Caution Panel', r: 'Check', id: 1 },
    { c: 'Engine Instruments', r: 'Check', id: 2 },
    { c: 'LDG Gear', r: 'DOWN, 3 Greens', id: 3 },
    { c: 'WX Radar', r: 'STBY', id: 4 },
  ]
  return <ChecklistBody items={items} />
}

export default Landing
