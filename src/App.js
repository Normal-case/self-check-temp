import "./App.scss";
import Modal from "./Modal";
import React, { useState } from "react";
// import CarryOn from "./components/carryon";
// import Checked from "./components/checked";
// import CarryLimit from "./components/carrylimit";
// import API from "./api-server";

import { Link, Route } from "react-router-dom";
import page1 from "./page/page1.jsx";
import page2 from "./page/page2.jsx";
import page3 from "./page/page3.jsx";
import page4 from "./page/page4.jsx";
import page5 from "./page/page5.jsx";
import TabNav from "./components/TabNav.jsx";

function App() {
  return (
    <>
      <Route path="/page1" component={page1} exact={true} />
      <Route path="/page2" component={page2} exact={true} />
      <Route path="/page3" component={page3} exact={true} />
      <Route path="/page4" component={page4} exact={true} />
      <Route path="/page5" component={page5} exact={true} />
    </>
  );
}

export default App;
