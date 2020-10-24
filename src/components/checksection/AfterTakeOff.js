import React from 'react'
import ChecklistBody from './ChecklistBody'

const AfterTakeOff = () => {
  const items = [
    { c: 'FD Modes (< 60 KIAS)', r: 'As Desired', id: 1 },
    { c: 'LDG /  Search Light', r: 'OFF', id: 2 },
    { c: 'EAPS', r: 'OFF / As Required', id: 3 },
    { c: 'Vent Blower', r: 'As Required', id: 4 },
    { c: 'WX Radar', r: 'As Required', id: 5 },
  ]
  return <ChecklistBody items={items} />
}

export default AfterTakeOff
