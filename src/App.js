import "./App.scss";
import "./Self.scss";
import "./Size.scss";
import "./Volume.scss";
import React, { useState } from "react";


import { useLocation, Route } from "react-router-dom"
import SlideRoutes from 'react-slide-routes'
import firstPage from './page/firstPage.jsx'

import page2 from "./page/page2.jsx"
import page3 from "./page/page3.jsx"
import page4 from "./page/page4.jsx"
import page5 from "./page/page5.jsx"
import page6 from "./page/page6.jsx"

import page6_2 from "./page/page6_2.jsx"

function App() {
  const location = useLocation()

  return (
    <>
      <SlideRoutes location={location}>
        <Route path="/" component={firstPage} exact={true} />
        <Route path="/page2" component={page2} exact={true} />
        <Route path="/page3" component={page3} exact={true} />
        <Route path="/page4" component={page4} exact={true} />
      </SlideRoutes>
        <Route path="/page5" component={page5} exact={true} />
        <Route path="/page6" component={page6} exact={true} />
        <Route path="/page6_2" component={page6_2} exact={true} />
    </>
  );
}

export default App;
