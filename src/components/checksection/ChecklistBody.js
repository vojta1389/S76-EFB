import React from 'react'

const ChecklistBody = (props) => {
  return (
    <div className='row'>
      <div className='col-6 text-left pr-0'>
        <ul className='checklist'>
          {props.items.map((item) => {
            if (item.id % 2 === 0) {
              return (
                <li className='second-line' key={item.id}>
                  {item.c}
                </li>
              )
            } else {
              return <li key={item.id}>{item.c}</li>
            }
          })}
        </ul>
      </div>
      <div className='col-6 text-right pl-0'>
        <ul className='checklist'>
          {props.items.map((item) => {
            if (item.id % 2 === 0) {
              return (
                <li className='second-line' key={item.id}>
                  {item.r}
                </li>
              )
            } else {
              return <li key={item.id}>{item.r}</li>
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default ChecklistBody
