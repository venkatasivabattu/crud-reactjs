import axios from 'axios';

export function getMobiles(){
    return axios.get('http://localhost:4000/getMobiles');
}
export function delMobile(id){
    return axios.delete('http://localhost:4000/delMobile/'+id);
}
export function postMobile(data){
    
    return axios.post('http://localhost:4000/postMobile',data);
}
export function updateMobile(data,id){
    
    return axios.put('http://localhost:4000/updateMobile/'+id,data);
}