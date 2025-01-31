import React, { useState,useContext } from 'react'
import Table from './Table.jsx'
import PerfectSubjects from './PerfectSubjects.jsx'
import LoaderComponent from './Loader.jsx'
import { UserContext } from '../Context/Context.jsx'
import Description from './Description.jsx'
export default function Main() {
  const [Loader,setLoader]=useState(false)
 const {SearchResults, SetSearchResults}=useContext(UserContext);
  return (
    <div className='container bg-transparent mt-4'>
    <h1 className='text-center' style={{fontFamily:'cursive'}}>Find Your Perfect Subject </h1>
          <div className='row'>
    <div className='col'>
    <PerfectSubjects Loader={Loader} setLoader={setLoader}/>
    </div>
    </div>
    <div className='row'>
    {
      Loader&&<LoaderComponent/>
    }
    {
      SearchResults!=null&&(<React.Fragment><Description description={SearchResults.description}/><Table SearchResults={SearchResults.recommendedData}/></React.Fragment>)
    }
    </div>
    </div>
  )
}
