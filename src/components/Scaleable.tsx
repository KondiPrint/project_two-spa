"use client";

import React, { useState, useEffect } from "react";
import GetInTouch_MobileView from "./Mobile_view/GetInTouch/GetInTouch_MobileView";
import Maintainable_MobileView from "./Mobile_view/Maintainable/Maintainable_MobileView";
import WhatWeDo_MobileView from "./Mobile_view/WhatWeDo/WhatWeDo_MobileView";
import Mobile from "./Mobile_home"
import GetInTouch_DesktopView from "./Desktop_view/GetInTouch/GetInTouch_DesktopView";
import Maintainable_DesktopView from "./Desktop_view/Maintainable/Maintainable_DesktopView";
import WhatWeDo_DesktopView from "./Desktop_view/WhatWeDo/WhatWeDo_DesktopView";
import Desktop from "./Mobile_home"

const Content = ({ data:any }) => {
  const [dimensions, setDimensions] = useState(0);

  useEffect(() => {
    setDimensions(window.innerWidth);

    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ^ END useEffect

  const breakpoint = 620;

  if (dimensions < breakpoint) {
    return (
      <>
        <GetInTouch_MobileView data={data} />
        <Maintainable_MobileView data={data} />
        <WhatWeDo_MobileView data={data} />
        <Desktop data={data}/>
      </>
    );
  } else {
    return (
      <>
        <Mobile data={data}/>
        <GetInTouch_DesktopView data={data} />
        <Maintainable_DesktopView data={data} />
        <WhatWeDo_DesktopView data={data} />
      </>
    );
  }
}; // ^ END Content
export default Content;
