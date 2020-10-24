import React from 'react'
import ChecklistBody from './ChecklistBody'

const AfterLanding = () => {
  const items = [
    { c: 'APs', r: 'OFF', id: 1 },
    { c: 'Transponder', r: 'STBY', id: 2 },
    { c: 'TCAS', r: 'STBY', id: 3 },
    { c: 'Windshield / Pitot Heat', r: 'OFF', id: 4 },
    { c: 'LDG / Search Light', r: 'OFF', id: 5 },
    { c: 'Strobe Lights', r: 'OFF', id: 6 },
  ]
  return <ChecklistBody items={items} />
}

export default AfterLanding
