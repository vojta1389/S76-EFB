import React, { useState } from 'react'
import { Document } from 'react-pdf/dist/esm/entry.webpack'
import { Page } from 'react-pdf'
import rfm from '../files/S76B_RFM.pdf'

const RFMPDF = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const content = [
    { id: 1, name: 'Limitations', page: 41 },
    { id: 2, name: 'Normal Procedures', page: 85 },
    { id: 3, name: 'Emergency Procedures', page: 139 },
    { id: 4, name: 'Performance', page: 221 },
    { id: 5, name: 'Description', page: 295 },
    { id: 6, name: 'Loading Information', page: 383 },
    { id: 7, name: 'Noise Abatement', page: 465 },
    { id: 8, name: 'Performance - Supplemental', page: 467 },
  ]
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
          {content.map((chapter) => {
            return (
              <button
                key={chapter.id}
                className='btn btn-gold btn-block'
                onClick={() => setPageNumber(chapter.page)}
              >
                {chapter.name}
              </button>
            )
          })}
          <div className='col-12 mt-3'>
            {pageNumber > 1 && pageNumber <= numPages && (
              <button
                className='btn btn-gold btn-page'
                onClick={() => {
                  setPageNumber(pageNumber - 1)
                }}
              >
                PREVIOUS
              </button>
            )}

            {pageNumber < numPages && (
              <button
                className='btn btn-gold btn-page'
                onClick={() => {
                  setPageNumber(pageNumber + 1)
                }}
              >
                NEXT
              </button>
            )}
          </div>
        </div>
        <div className='col-8'>
          <Document file={rfm} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p className=''>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>

      <br />
      <br />
    </div>
  )
}

export default RFMPDF
