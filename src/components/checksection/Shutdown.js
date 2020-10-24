import React from 'react'
import ChecklistBody from './ChecklistBody'

const Shutdown = () => {
  const items = [
    { c: 'Cyclic / Collective', r: 'Centred / Down', id: 1 },
    { c: 'Parking Brake', r: 'ON', id: 2 },
    { c: 'Trim Switches', r: 'ON', id: 3 },
    { c: 'EAPS', r: 'OFF', id: 4 },
    { c: 'ENG Overspeed Protection Test', r: 'TEST', id: 5 },
    { c: 'DC / AC GEN', r: 'TEST', id: 6 },
    { c: 'Both ECLs', r: 'IDLE', id: 7 },
    { c: 'Clock', r: 'Time (60 sec.)', id: 8 },
    { c: 'Master Start', r: 'ON', id: 9 },
    { c: 'EMER Lights', r: 'OFF', id: 10 },
    { c: 'STBY ATT Indicator', r: 'OFF', id: 11 },
    { c: 'EFIS / Radios / UNS', r: 'OFF', id: 12 },
    { c: 'ADELT', r: 'OFF', id: 13 },
    { c: 'WX Radar / TCAS', r: 'OFF', id: 14 },
    { c: 'Inverters', r: 'OFF', id: 15 },
    { c: 'ECLs / Fuel Levers', r: 'OFF', id: 16 },
    { c: 'Rotor Brake', r: '> 65% NR', id: 17 },
    { c: 'Master Start', r: 'OFF', id: 18 },
    { c: 'Remaining Switches', r: 'OFF', id: 19 },
    { c: 'BATT', r: 'OFF', id: 20 },
  ]
  return <ChecklistBody items={items} />
}

export default Shutdown
