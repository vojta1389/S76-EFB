import React from 'react'
import ChecklistBody from './ChecklistBody'

const BeforeStart = () => {
  // Checklist items
  const items = [
    { c: 'Document', r: 'On Board', id: 1 },
    { c: 'Flight Planning', r: 'Prepared', id: 2 },
    { c: 'Exterior Checks', r: 'Complete', id: 3 },
    { c: 'Cargo and Bags', r: 'Secured', id: 4 },
    { c: 'Seat / Pedals', r: 'Adjusted', id: 5 },
    { c: 'Seat Belts', r: 'Fastened', id: 6 },
    { c: 'Doors', r: 'Closed', id: 7 },
    { c: 'Pins', r: 'On Board', id: 8 },
    { c: ' Parking Brake', r: 'SET', id: 9 },
    { c: 'Servo Switches', r: 'Centred', id: 10 },
    { c: 'Batt Feed Test', r: 'TEST', id: 11 },
    { c: 'ESS Bus REC', r: 'OFF', id: 12 },
    { c: 'Radio Master', r: 'OFF', id: 13 },
    { c: 'Trim Switches', r: 'ON', id: 14 },
    { c: 'LDG Gear', r: 'DOWN', id: 15 },
    { c: 'LDG Emer. Handle', r: 'IN / Secured', id: 16 },
    { c: 'Speed Bug', r: 'SET', id: 17 },
    { c: 'STBY ATT Indicator', r: 'Test Tone', id: 18 },
    { c: 'EMER BATT', r: 'Test 10 sec', id: 19 },
    { c: 'Master Start', r: 'OFF', id: 20 },
    { c: 'BATT', r: 'ON', id: 21 },
    { c: 'DC / AC GEN', r: 'ON', id: 22 },
    { c: 'Inverter', r: 'OFF', id: 23 },
    { c: 'EMER Lights', r: 'ARMED', id: 24 },
    { c: 'MAN Reversion Light', r: 'OFF', id: 25 },
    { c: 'Annunciator Panel', r: 'Test', id: 26 },
    { c: 'Beacon', r: 'On Top', id: 27 },
    { c: 'LDG Gear', r: '3 Greens', id: 28 },
    { c: 'Fuel Gauge', r: 'TEST', id: 29 },
    { c: 'Fuel Quantity', r: 'Check', id: 30 },
    { c: 'ENG Failure Warning', r: 'TEST', id: 31 },
    { c: 'EEC Maint Switch', r: 'Check', id: 32 },
    { c: 'Radio Master Bypass', r: 'OFF', id: 33 },
    { c: 'Compass Control', r: 'Slave', id: 34 },
    { c: 'Load Share', r: 'Torque', id: 35 },
    { c: 'ADELT', r: 'OFF', id: 36 },
    { c: 'CBs', r: 'IN', id: 37 },
    { c: 'CVR', r: 'TEST', id: 38 },
    { c: 'Heater / Bleed Air / Blower', r: 'OFF', id: 39 },
    { c: 'Fire Detector Test', r: 'Aft / Fwd', id: 40 },
    { c: 'Prime Switches', r: 'OFF', id: 41 },
    { c: 'Rotor Brake', r: 'Test / As Desired', id: 42 },
    { c: 'Fuel Lever', r: 'CROSFEED', id: 43 },
    { c: 'ECL', r: 'OFF', id: 44 },
    { c: 'Fire T-Handle', r: 'Forward', id: 45 },
    { c: 'Fire EXT Switch', r: 'MID Position', id: 46 },
  ]
  return <ChecklistBody items={items} />
}

export default BeforeStart
