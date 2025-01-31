import axios from "axios";
import { ApiLink } from "../../App";
import { toast_fail } from "../alert/alert";
export default async function GetRecommendedData(setLoader,SetRecommendedData,Data)
{
  if(validation(Data))
  {
    setLoader(true);
    try{
        const res=await axios.get(`${ApiLink}/getRecommendedData`,{
            params:{
              Data
            }
        });
        if(res.data.status)
        {
            
            SetRecommendedData(res.data.data);
        }
        else{
            
            toast_fail(res.data.msg);
        }
    }
    catch(error){
        console.log(error);
        toast_fail('Failed to get recommended data');
    }
    finally{
        setLoader(false);
    }
  }
}
function validation(data)
{
    if(data.name.trim() =='' || data.SelectedSubjects.length==0)
    {
        toast_fail('Please fill all required fields');
        return false;
    }
    return true;
}
