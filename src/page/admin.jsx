import React, { useState, useEffect } from "react"
import API from '../api-server'


const Admin = () => {

  const [responseResult, setResponseResult] = useState(null)

  useEffect(() => {
    API.adminSend()
      .then(resp => getResponse(resp))
      .catch(error => console.log(error))
  })

  const getResponse = (resp) => {
    console.log(resp)
    setResponseResult(resp)
  }

  return (
     <>
      <h3>관리자 페이지</h3>
      {responseResult}
     </>  
  );
};

export default Admin;