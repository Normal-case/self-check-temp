import * as React from 'react';
import { Button } from '@mui/material';

const ResultButton=()=> {
    return (
        <div className="ButtonWrap">
        
           <Button variant="outlined" style={{border:"1px solid #333", color:"#333"}}> 
           다시하기
           </Button>

 <Button variant="outlined" style={{border:"1px solid #333", color:"#333"}}> 
 처음으로
</Button>

        </div>
       
    )
}

export default ResultButton