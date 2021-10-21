import * as React from 'react';
import { Button } from '@mui/material';

const ResultTable=(clsName, openModal)=> {
    return (
        <div className="TableWrap">
        <div className="TableRow">
           <span> <b>{clsName}</b>이(가) 발견되었습니다.</span> 
           <Button variant="outlined" onClick={openModal(clsName)} style={{border:"1px solid #333", color:"#333"}}> 
반입규정 확인
           </Button>
        </div>
           <hr />
        </div>
    )
}

export default ResultTable