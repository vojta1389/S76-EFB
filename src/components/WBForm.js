import React, { useState, useEffect } from 'react'
import WBResult from './WBResult'

export const WBForm = () => {
  // Set initial values
  const [pilot, setPilot] = useState(90)
  const [copilot, setCopilot] = useState(0)
  const [fwdPax, setFwd] = useState(0)
  const [aftPax, setAft] = useState(0)
  const [fuel, setFuel] = useState(1900)
  const [bags, setBags] = useState(20)

  // Always on form update, recalculates current values
  useEffect(() => {
    getWB(pilot, copilot, fwdPax, aftPax, fuel, bags)
  }, [pilot, copilot, fwdPax, aftPax, bags, fuel])

  // Update pilot weight
  const updatePilot = (e) => {
    setPilot(e.target.value)
  }

  // Update copilot weight
  const updateCopilot = (e) => {
    setCopilot(e.target.value)
  }

  // Update FWD pax weight
  const updateFwd = (e) => {
    setFwd(e.target.value)
  }

  // Update AFT pax weight
  const updateAft = (e) => {
    setAft(e.target.value)
  }

  // Update bags weight
  const updateBags = (e) => {
    setBags(e.target.value)
  }

  // Update FUEL weight
  const updateFuel = (e) => {
    setFuel(e.target.value)
  }

  // Make final weight and CG calculation
  const getWB = (pilot, copilot, fwdPax, aftPax, fuel, bags) => {
    // There will be weight and balance calculation done
    const heliWeight = 8417
    const heliMoment = 1741884
    // Total moment calculation
    const pilotsMoment = (parseFloat(pilot) + parseFloat(copilot)) * 102.5
    const fwdPaxMoment = parseFloat(fwdPax) * 139
    const aftPaxMoment = parseFloat(aftPax) * 197.5
    const fuelMoment = parseFloat(fuel) * 216.7
    const bagsMoment = parseFloat(bags) * 235
    const totalMoment =
      heliMoment +
      fuelMoment +
      (pilotsMoment + fwdPaxMoment + aftPaxMoment + bagsMoment) * 2.20462

    // Total weight (heliWeight and Fuel is in pounds the rest is converted)
    const totalWeight = Math.round(
      heliWeight +
        parseFloat(fuel) +
        (parseFloat(pilot) +
          parseFloat(copilot) +
          parseFloat(fwdPax) +
          parseFloat(aftPax) +
          parseFloat(bags)) *
          2.20462
    )
    const totalArm = Math.round((totalMoment / totalWeight) * 100) / 100
    const result = { totalWeight, totalArm }
    return result
  }

  const data = getWB(pilot, copilot, fwdPax, aftPax, fuel, bags)

  return (
    <div className='col-md-6 wb'>
      <br />
      <form>
        <div className='row text-center'>
          <div className='form-group m-2'>
            <label htmlFor='copilot'>Co-pilot (kg)</label>
            <input
              type='number'
              className='form-control'
              id='copilot'
              min='0'
              max='150'
              value={copilot}
              onChange={updateCopilot}
            />
          </div>
          <div className='form-group m-2'>
            <label htmlFor='pilot'>Pilot (kg)</label>
            <input
              type='number'
              className='form-control'
              id='pilot'
              min='40'
              max='150'
              value={pilot}
              onChange={updatePilot}
            />
          </div>
        </div>
        <div className='row text-center'>
          <div className='form-group m-2'>
            <label htmlFor='fwdrow'>FWD Row (kg)</label>
            <input
              type='number'
              className='form-control'
              id='fwdrow'
              min='0'
              max='400'
              step='5'
              value={fwdPax}
              onChange={updateFwd}
            />
          </div>
        </div>
        <div className='row text-center'>
          <div className='form-group m-2'>
            <label htmlFor='aftrow'>AFT Row (kg)</label>
            <input
              type='number'
              className='form-control'
              id='aftrow'
              min='0'
              max='400'
              step='5'
              value={aftPax}
              onChange={updateAft}
            />
          </div>
        </div>
        <div className='row text-center'>
          <div className='form-group m-2'>
            <label htmlFor='fuel'>Fuel (lbs)</label>
            <input
              type='number'
              className='form-control'
              id='fuel'
              min='200'
              max='2000'
              step='50'
              value={fuel}
              onChange={updateFuel}
            />
          </div>
        </div>
        <div className='row text-center'>
          <div className='form-group m-2'>
            <label htmlFor='baggage'>Baggage (kg)</label>
            <input
              type='number'
              className='form-control'
              id='baggage'
              min='10'
              max='272'
              value={bags}
              onChange={updateBags}
            />
          </div>
        </div>
      </form>

      <WBResult weight={data.totalWeight} cg={data.totalArm} />
    </div>
  )
}
