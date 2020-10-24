import React from 'react'
import ChecklistBody from './ChecklistBody'

const Hover = () => {
  const items = [
    { c: 'CG', r: 'Check', id: 1 },
    { c: 'Caution Panel', r: 'Clear', id: 2 },
    { c: 'Howe Power', r: 'Note', id: 3 },
  ]
  return <ChecklistBody items={items} />
}

export default Hover
