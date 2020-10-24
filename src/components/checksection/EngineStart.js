import React from 'react'
import ChecklistBody from './ChecklistBody'

const EngineStart = () => {
  const items = [
    { c: 'Clearance', r: 'Received', id: 1 },
    { c: 'Rotor Area', r: 'Clear', id: 2 },
    { c: 'FSB / NS', r: 'ON', id: 3 },
    { c: 'EAPS', r: 'OFF', id: 4 },
    { c: 'Master Start', r: 'ON', id: 5 },
    { c: 'ECL', r: 'IDLE', id: 6 },
    { c: 'Starter', r: 'PRESS', id: 7 },
    { c: 'Clock', r: 'START', id: 8 },
    { c: 'Start Completed', r: 'In 30 Sec', id: 9 },
    { c: 'Inverters', r: 'ON', id: 10 },
    { c: 'EXT Power', r: 'OFF', id: 11 },
    { c: 'Stby ATT Indicator', r: 'ON', id: 12 },
    { c: 'Rotor Brake', r: 'OFF', id: 13 },
    { c: 'Flight Controls / Servos', r: 'Check', id: 14 },
    { c: 'ECL', r: 'FLY', id: 15 },
    { c: 'Start Second Engine', r: 'X', id: 17 }, // Out of sequence to get better look
    { c: 'Generator', r: '< 100 AMPs', id: 16 },
    { c: 'Start Second Engine', r: 'Same as N.1', id: 19 },
    { c: 'Master Start', r: 'OFF', id: 20 },
    { c: 'ECLs', r: 'FLY', id: 21 },
    { c: 'AC GEN (above 92%)', r: 'Check ON', id: 22 },
    { c: 'Fuel Levers', r: 'DIRECT', id: 23 },
    { c: 'EEC Lights', r: 'One per Engine', id: 24 },
    { c: 'ESS BUS Recovery', r: 'TEST', id: 25 },
    { c: 'WX Radar', r: 'STBY', id: 26 },
    { c: 'TCAS', r: 'STBY', id: 27 },
    { c: 'EFIS / NAV / Radios', r: 'ON', id: 28 },
    { c: 'UNS', r: 'ON', id: 29 },
    { c: 'APs', r: 'TEST', id: 30 },
    { c: 'EEC Status', r: 'TEST', id: 31 },
    { c: 'Fire Detector', r: 'TEST', id: 32 },
  ]
  return <ChecklistBody items={items} />
}

export default EngineStart
