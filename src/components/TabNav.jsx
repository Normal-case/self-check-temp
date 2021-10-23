import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Button, Tabs, Tab } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
        <div className="pageWrap firstPageWrap">
    <img src="img/plane.svg" className="plane" />
  
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="셀프 체크" {...a11yProps(0)} style={{width:20, color:'#001189'}} />
          <Tab label="크기 측정" {...a11yProps(1)} style={{width:20, color:'#001189'}} />
          <Tab label="부피 측정" {...a11yProps(0)} style={{width:20, color:'#001189'}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <img src="img/cont1.svg" className="ImgCont" width="60" />
     <span className="MainText">
기내 반입금지 물품, 집에서는 체크할 수 없을까요? <br />
가능합니다! 항공보안 인공지능을 이용해보세요. <br /> 사진을 찍을 수 있는 <span className="textImportant">핸드폰</span>만 있으면 됩니다.
     </span>

<br /><br /><br />
 <Link to="/page2"> <Button variant="outlined">셀프체크 시작하기</Button> </Link>

      </TabPanel>
      <TabPanel value={value} index={1}>
     <img src="img/cont2.svg" className="ImgCont" width="100" />
  <span className="MainText">
꼭 가져가야 하는 물건이 있는데, <br />반입금지 규정은 너무 많고 복잡한가요? <br />
디테일한 감정을 위해 크기 측정을 해보세요! <br />항공보안 인공지능이 함께합니다. <br /> <span className="textImportant">여권, 혹은 A4용지</span>를 준비해주세요.
     </span>

<br /><br /><br />
<Link to="/page5"> <Button variant="outlined">크기측정 시작하기</Button> </Link>
    </TabPanel>


 <TabPanel value={value} index={2}>
     <img src="img/cont3.svg" className="ImgCont" width="80" />
  <span className="MainText">
항공기에 물을 가지고 들어가면 <br />
안된다는 사실, 아셨나요?<br />
승객 여행의 안전을 위해 식별되지 않은 <br /> 
<span className="textImportant">일정량 이상의 액체는 기내 반입이 금지</span>됩니다.<br />
기내 반입 전, 병의 부피를 측정해봅시다.
     </span>

<br /><br /><br />
<Link to="/page7"> <Button variant="outlined">부피측정 시작하기</Button> </Link>

    </TabPanel>

    </Box>
      </div>
  );
}
