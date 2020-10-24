import React, { useState } from 'react'
import BeforeStart from './checksection/BeforeStart'
import EngineStart from './checksection/EngineStart'
import BeforeTaxi from './checksection/BeforeTaxi'
import Taxi from './checksection/Taxi'
import BeforeTakeOff from './checksection/BeforeTakeOff'
import Hover from './checksection/Hover'
import AfterTakeOff from './checksection/AfterTakeOff'
import BeforeLanding from './checksection/BeforeLanding'
import Landing from './checksection/Landing'
import AfterLanding from './checksection/AfterLanding'
import Shutdown from './checksection/Shutdown'

const ChecklistComp = () => {
  const [check, setCheck] = useState('')
  const showCheck = (type) => {
    if (type === check) {
      setCheck('')
    } else {
      setCheck(type)
    }
  }
  return (
    <div className='col-12 col-md-6'>
      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('bes')
        }}
      >
        BEFORE ENGINE START
      </button>
      {check === 'bes' && <BeforeStart />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('es')
        }}
      >
        ENGINE START
      </button>
      {check === 'es' && <EngineStart />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('btaxi')
        }}
      >
        BEFORE TAXI
      </button>
      {check === 'btaxi' && <BeforeTaxi />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('taxi')
        }}
      >
        TAXI
      </button>
      {check === 'taxi' && <Taxi />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('bto')
        }}
      >
        BEFORE TAKE OFF
      </button>
      {check === 'bto' && <BeforeTakeOff />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('hover')
        }}
      >
        HOVER
      </button>
      {check === 'hover' && <Hover />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('ato')
        }}
      >
        AFTER TAKE OFF
      </button>
      {check === 'ato' && <AfterTakeOff />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('bland')
        }}
      >
        BEFORE LANDING
      </button>
      {check === 'bland' && <BeforeLanding />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('landing')
        }}
      >
        LANDING
      </button>
      {check === 'landing' && <Landing />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('aland')
        }}
      >
        AFTER LANDING
      </button>
      {check === 'aland' && <AfterLanding />}

      <button
        className='btn btn-gold btn-block mb-4'
        onClick={() => {
          showCheck('shut')
        }}
      >
        SHUTDOWN
      </button>
      {check === 'shut' && <Shutdown />}
    </div>
  )
}

export default ChecklistComp
