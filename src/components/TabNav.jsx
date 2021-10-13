import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
// import page1 from "../page/page1.jsx";

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
        <div className="pageWrap">
    <img src="img/plane.svg" className="plane" />
  
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="크기 체크" {...a11yProps(0)} />
          <Tab label="셀프 체크" {...a11yProps(1)} />
  
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <img src="img/cont1.jpeg" width="100%" />
     <span className="MainText">
    내가 가져가는 물건들 중에서 <br /> 기내반입이 가능한 물품이 있는지 헷갈리다면 <br />
항공보안 인공지능을 이용해보세요! <br /> <span className="textImportant">사진을 찍을 수 있는 핸드폰</span>만 있으면 됩니다.
     </span>

<Link to="/page2"> <img src="img/arrow.png" className="arrow"/></Link>
<h1>시작하기</h1>

      </TabPanel>
      <TabPanel value={value} index={1}>
     <img src="img/cont2.jpeg" width="100%" />
  <span className="MainText">
꼭 가져가야 하는 물건이 <br /> 크기가 커서 헷갈리세요? <br />
원활히 크기를 체크하기 위한 준비물로 <br /> <span className="textImportant">여권, 혹은 A4용지</span>를 준비해주세요.
     </span>

<Link to="/page2"> <img src="img/arrow.png" className="arrow"/></Link>
<h1>시작하기</h1>

    </TabPanel>
    </Box>
      </div>
  );
}
