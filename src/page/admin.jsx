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
    console.log(resp['data']['knife'])
  }

  // const forLoopKnife = () => {
  //   const result = []
  //   for (let i=0;i<responseResult['data']['knife'];i++){
  //     result.push(
  //       <>
  //       {responseResult['data']['knife'][i]['fields']['product']}
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>위탁수하물</th>
  //             <th>기내휴대</th>
  //             <th>특별규정</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>{responseResult['data']['knife'][i]['fields']['checked']}</td>
  //             <td>{responseResult['data']['knife'][i]['fields']['carryon']}</td>
  //             <td>{responseResult['data']['knife'][i]['fields']['special']}</td>
  //           </tr>
  //           <tr>
  //             <td colSpan='3'>{responseResult['data']['knife'][i]['fields']['description']}</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //       </>
  //     )
  //   }
  //   return result
  // }

  return (
     <>
      <h3>관리자 페이지</h3>
      <div>
        칼
        {console.log(responseResult['data'])}
      </div>
     </>  
  );
};

export default Admin;