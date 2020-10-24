import React from 'react'
import ChecklistBody from './ChecklistBody'

const BeforeTaxi = () => {
  const items = [
    { c: 'Doors', r: 'Check', id: 1 },
    { c: 'TCAS', r: 'TEST', id: 2 },
    { c: 'EFIS', r: 'TEST', id: 3 },
    { c: 'EFIS', r: 'X-Check', id: 4 },
    { c: 'EAPS', r: 'ON', id: 5 },
    { c: 'OAT', r: 'Check', id: 6 },
    { c: 'Windshield / Pitot Heater', r: 'As Required', id: 7 },
    { c: 'Vent Blower', r: 'As Required', id: 8 },
    { c: 'Search / LDG Light', r: 'As Reqiured', id: 9 },
    { c: 'APs', r: 'Check OFF', id: 10 },
  ]
  return <ChecklistBody items={items} />
}

export default BeforeTaxi
