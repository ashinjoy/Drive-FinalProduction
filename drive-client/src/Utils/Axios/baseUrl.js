import axios  from 'axios' 
console.log('axxios');

const axiosInstance = axios.create({
  baseURL:"https://drivee.online/api/",
  withCredentials:true,
  headers:{
    "Content-Type":'application/json'
  }
})

 
export default axiosInstance