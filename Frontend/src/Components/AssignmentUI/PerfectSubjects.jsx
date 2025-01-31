import React,{useContext, useState} from 'react'
import Input from '../Login/Input'
import GetRecommendedData from './getData';
import { UserContext } from '../Context/Context';
const mapping = {
    'Design': 'Design',
    'Science': 'Paramedical',
    'Finance': 'Management',
    'Creativity': 'Arts',
    'Technology': 'Engineering',
};
export default function PerfectSubjects({Loader,setLoader}) {
    
      const [data,Setdata]=useState({
        name:'',
        SelectedSubjects: []
      })
      const {SearchResults, SetSearchResults}=useContext(UserContext);
    //   const [Loader,setLoader]=useState(false)
      function onHandler(e)
      {
        Setdata({...data,[e.target.name]:e.target.value})
      }
    //   console.log(SearchResults)
  return (
        <div>
        <Input lable='Enter Your Name' placeholder='abc' type='text' handler={onHandler} value={data.name} name='name'/>
        <div className="row p-3">
        {Object.entries(mapping).map(([key,value])=>(
            <Checkbox key={key} value={key} Setdata={Setdata} data={data}/>
        ))}
        <button className='btn btn-primary mt-4 mb-4' disabled={Loader} onClick={()=>{GetRecommendedData(setLoader,SetSearchResults,data)}}>{Loader ? 'Loading' : 'Submit'}</button>
        </div>   
        </div>
  )
}
const Checkbox=({Setdata,value})=>{
    
    
    function onHandler(e) {
        const val = mapping[e.target.value];
    
        Setdata(prevState => {
            let selectedSubjects = new Set(prevState.SelectedSubjects);
    
            if (e.target.checked) {
                selectedSubjects.add(val); // Add new value
            } else {
                selectedSubjects.delete(val); // Remove value if unchecked
            }
    
            return { ...prevState, SelectedSubjects: Array.from(selectedSubjects) };
        });
    }
    
    
    return(
    <div className="form-check m-2">
    <input className="form-check-input" type="checkbox" value={value} onChange={onHandler}/>
    <label className="form-check-label">
    {value}
    </label>
    </div>
    )
}