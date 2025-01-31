import React from 'react'

export default function Description({description}) {
  return (
    <div className='container-fluid'>
    <div style={{ margin: '20px ' }}>
    <h1 style={{fontFamily:'cursive'}}>Description</h1>
    <div className='description' style={{ width: '1.5cm' }}></div>
    </div>
    {
        description.map((val,index)=>{
            return (
                <div key={index} style={{margin: '20px 0px' }}>
                   <dl>
                   <dt>{val.category}</dt>
                   <dd className='ms-4 mt-2 '>{val.description}</dd>
                   </dl>
                   <p className='fw-bold'>Career Paths:{val.careerPaths.join(', ')}</p>
                   <hr style={{border: '1px solid black' }} />

                </div>
            )
        })
    }
  </div>
  )
}
