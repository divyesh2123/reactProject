import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    Authorization : "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mjc0NWY2MjdmZTQ1NDcwYWNhZDc4M2EiLCJpZCI6IjYyNzQ1ZjYyN2ZlNDU0NzBhY2FkNzgzYSIsImlhdCI6MTY1OTQxODYxNywiZXhwIjoxNjU5NDE5NTE3fQ.tVnmCg7vH-pEn29JbEYhlKo_2ayfJfCZng4KzOIE5UE"
  },
});

export default authFetch;