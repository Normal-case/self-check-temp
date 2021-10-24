import React, { useState, useEffect, useRef } from "react"
import API from '../api-server'


const Admin = () => {

  const [responseResult, setResponseResult] = useState('')
  const [firstTime, setFirstTime] = useState(false)

  useEffect(() => {
    if(!firstTime){
      API.adminSend()
        .then(resp => getResponse(resp))
        .catch(error => console.log(error))
      
      setFirstTime(true)
    }
  }, [responseResult])

  const getResponse = (resp) => {
    setResponseResult(resp)
  }

  const forLoopKnife = () => {
    const result = []

    if (responseResult){
      console.log('if inner')
      console.log(typeof(JSON.stringify(responseResult['data']['knife'])))
      console.log(typeof(JSON.parse(JSON.stringify(responseResult['data']['knife']))))
      console.log(JSON.stringify(responseResult['data']['knife']))
      console.log(JSON.parse(JSON.stringify(responseResult['data']['knife'])))
      const json_knife = JSON.parse(JSON.stringify(responseResult['data']['knife']))
      for (let i=0;i<json_knife.length;i++){
        console.log(json_knife[i])
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

    console.log(result)
    return result
  }

  return (
     <>
      <h3>관리자 페이지</h3>
      <div>
        칼
        {forLoopKnife()}
      </div>
     </>  
  );
};

export default Admin;