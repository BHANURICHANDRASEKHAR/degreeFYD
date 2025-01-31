import Cookie from 'js-cookie'
   
export default function getCookie()
{
    return Cookie.get('degreeFYd-user-token') || null;  
}
export function RemoveToken()
{
    Cookie.remove('degreeFYd-user-token');  
    return;
}