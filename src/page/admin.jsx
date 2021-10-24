import React, { useState, useEffect } from "react"
import API from '../api-server'


const Admin = () => {

  const [responseResult, setResponseResult] = useState('')

  useEffect(() => {
    API.adminSend()
      .then(resp => getResponse(resp))
      .catch(error => console.log(error))
  }, [])

  const getResponse = (resp) => {
    console.log(resp)
    setResponseResult(resp)
  }

  return (
     <>
      <h3>관리자 페이지</h3>
      <div>
        칼
        { responseResult['data']['knife'] ?
          responseResult['data']['knife'].map((value, index) => 
            <>
            <h4>{value['fields']['product']}</h4>
            <table>
              <thead>
                <tr>
                  <th>위탁수하물</th>
                  <th>기내휴대</th>
                  <th>특별규정</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{value['fields']['checked']}</td>
                  <td>{value['fields']['carryon']}</td>
                  <td>{value['fields']['special']}</td>
                </tr>
                <tr>
                  <td colSpan='3'>{value['fields']['description']}</td>
                </tr>
              </tbody>
            </table>
            </>
          ) : null
        }
      </div>
     </>  
  );
};

export default Admin;