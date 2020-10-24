import React from 'react'
import ChecklistBody from './ChecklistBody'

const Taxi = () => {
  const items = [
    { c: 'Area', r: 'Clear', id: 1 },
    { c: 'Chocks', r: 'Removed', id: 2 },
    { c: 'Parking Brake', r: 'OFF', id: 3 },
    { c: 'Wheel Brake', r: 'Test', id: 4 },
  ]
  return <ChecklistBody items={items} />
}

export default Taxi
