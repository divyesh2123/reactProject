import axios from "axios";

const authFetchData = axios.create( {
baseURL : "http://localhost:4000"
     
})



  
authFetchData.interceptors.request.use(
    (request) => {

      //var myToken = JSON.parse(localStorage.getItem("token"));
      request.headers.common['Accept'] = 'application/json';
      request.headers.common['Authorization'] = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mjc0NWY2MjdmZTQ1NDcwYWNhZDc4M2EiLCJpZCI6IjYyNzQ1ZjYyN2ZlNDU0NzBhY2FkNzgzYSIsImlhdCI6MTY1OTQyMDMxNywiZXhwIjoxNjU5NDIxMjE3fQ.Mlqopev1RtIP1HElkgKuki3TOJ-Mabxgap7s0OVvt50'
      console.log('request sent');
      return request;
    },
    (error) => {
      //to handle or save data in cloud
      return Promise.reject(error);
    }
  );
  
  authFetchData.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetchData;