import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export default function page6_2() {
  return (

      <div className="selfwrap">
    <Box sx={{ flexGrow: 1 }} className="selfHeader">
      <AppBar position="static" style={{backgroundColor:"#fff", color:"#333", padding:"8px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           셀프 크기 측정
          </Typography>
          <Button color="inherit" variant="outlined"> <CameraAltIcon /> &nbsp;사진 촬영</Button>
        </Toolbar>
      </AppBar>
    </Box>

<p> <Button color="inherit" variant="outlined" className="bottomButton">크기 체크 시작</Button></p>
   

    </div>
  );
}
