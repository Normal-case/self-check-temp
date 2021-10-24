import React, { useEffect } from "react"
import API from '../api-server'


const Admin = () => {

  useEffect(() => {
    API.adminSend()
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  })

  return (
     <>
      <h3>관리자 페이지</h3>
     </>  
  );
};

export default Admin;