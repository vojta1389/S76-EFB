import React from 'react'
import { Scatter } from 'react-chartjs-2'

const WBResult = (props) => {
  // Chart.js
  const chart = {
    datasets: [
      {
        label: 'Flight Envelope',
        borderColor: '#b39b5b',
        borderWidth: 2,
        pointBackgroundColor: '#b39b5b',
        backgroundColor: '#777',
        pointBorderColor: '#888',
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        fillOpacity: 2,
        tension: 0,
        showLine: true,
        data: [
          { x: 199.2, y: 7500 },
          { x: 208.2, y: 7350 },
          { x: 210, y: 9200 },
          { x: 204.3, y: 11700 },
          { x: 199.2, y: 11700 },
          { x: 197, y: 11000 },
          { x: 194, y: 9500 },
          { x: 194, y: 8500 },
          { x: 199.2, y: 7500 },
        ],
      },
      {
        label: 'Take-off',
        borderWidth: 2,
        pointBorderColor: '#b39b5b',
        pointBackgroundColor: '#885544',
        backgroundColor: '#885544',
        borderColor: '#b39b5b',
        pointRadius: 5,
        pointHoverRadius: 15,
        fill: true,
        tension: 0,
        data: [{ x: props.cg, y: props.weight }],
      },
      {
        label: 'Landing',
        borderWidth: 2,
        pointBorderColor: '#333',
        pointBackgroundColor: '#ccc',
        backgroundColor: '#ccc',
        borderColor: '#333',
        pointRadius: 5,
        pointHoverRadius: 15,
        fill: true,
        tension: 0,
        data: [{ x: props.cg - 2, y: props.weight - 500 }],
      },
    ],
  }

  return (
    <div className='mt-4'>
      <div className='mt-3 mb-4'>
        <Scatter data={chart} />
      </div>
      <div className='row mb-4'>
        <div className='col-md-6 text-center'>
          <p>
            Weight:{' '}
            <span style={{ color: props.weight > 11700 ? 'red' : 'none' }}>
              {props.weight > 0 ? props.weight : 'INVALID'} lbs
            </span>
          </p>
        </div>
        <div className='col-md-6 text-center'>
          <p>
            CG:{' '}
            <span
              style={{
                color: props.cg > 210 || props.cg < 194 ? 'red' : 'none',
              }}
            >
              {props.cg > 0 ? props.cg : 'INVALID'} in
            </span>
          </p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default WBResult
