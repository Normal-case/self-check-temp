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

  const forLoopKnife = (categ) => {
    const result = []

    if (responseResult){
      const json_knife = JSON.parse(responseResult['data'][categ])
      for (let i=0;i<json_knife.length;i++){
        result.push(
          <div className='adminTable'>
          {json_knife[i]['fields']['product']}
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
                <td>{json_knife[i]['fields']['checked']}</td>
                <td>{json_knife[i]['fields']['carryon']}</td>
                <td>{json_knife[i]['fields']['special']}</td>
              </tr>
              <tr>
                <td colSpan='3'>{json_knife[i]['fields']['description']}</td>
              </tr>
            </tbody>
          </table>
          </div>
        )
      }
    }

    return result
  }

  return (
     <>
      <h3>관리자 페이지</h3>
      <div>
        칼 <br />
        {forLoopKnife('knife')}
      </div>
      <div>
        가위 <br />
        {forLoopKnife('scissors')}
      </div>
      <div>
        드라이버 <br />
        {forLoopKnife('driver')}
      </div>
      <div>
        병 <br />
        {forLoopKnife('bottle')}
      </div>
      <div>
        스프레이 <br />
        {forLoopKnife('spray')}
      </div>
      <div>
        음식물 <br />
        {forLoopKnife('food')}
      </div>
      <div>
        라이터 <br />
        {forLoopKnife('lighter')}
      </div>
     </>
  );
};

export default Admin;