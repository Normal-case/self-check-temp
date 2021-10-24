import React, { useState, useEffect, useRef } from "react"
import API from '../api-server'


const Admin = () => {

  const [responseResult, setResponseResult] = useState('')
  const startPage = useRef(false)

  useEffect(() => {
    if(!startPage){
      API.adminSend()
        .then(resp => getResponse(resp))
        .catch(error => console.log(error))
    }
  }, [responseResult])

  const getResponse = (resp) => {
    setResponseResult(resp)
  }

  const forLoopKnife = () => {
    const result = []

    if (responseResult){
      console.log('if inner')
      console.log(responseResult)
      for (let i=0;i<responseResult['data']['knife'];i++){
        result.push(
          <>
          {responseResult['data']['knife'][i]['fields']['product']}
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
                <td>{responseResult['data']['knife'][i]['fields']['checked']}</td>
                <td>{responseResult['data']['knife'][i]['fields']['carryon']}</td>
                <td>{responseResult['data']['knife'][i]['fields']['special']}</td>
              </tr>
              <tr>
                <td colSpan='3'>{responseResult['data']['knife'][i]['fields']['description']}</td>
              </tr>
            </tbody>
          </table>
          </>
        )
      }
    }
    else {
      console.log('else')
      console.log(responseResult)
    }

    return result
  }

  return (
     <>
      <h3>관리자 페이지</h3>
      <div>
        칼
        {responseResult ? forLoopKnife() : null}
      </div>
     </>  
  );
};

export default Admin;