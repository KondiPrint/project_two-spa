"use client";

import React, { useState, useEffect } from "react";
import GetInTouch_MobileView from "./Mobile_view/GetInTouch/GetInTouch_MobileView";
import Maintainable_MobileView from "./Mobile_view/Maintainable/Maintainable_MobileView";
import WhatWeDo_MobileView from "./Mobile_view/WhatWeDo/WhatWeDo_MobileView";
import GetInTouch_DesktopView from "./Desktop_view/GetInTouch/GetInTouch_Desktop";
import Maintainable_DesktopView from "./Desktop_view/Maintainable/Maintainable_Desktop";
import WhatWeDo_DesktopView from "./Desktop_view/WhatWeDo/WhatWeDo_Desktop";

const Content = ({ data }) => {
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

  return dimensions < breakpoint ? (
    <MobileView data={data} />
  ) : (
    <DesktopView data={data} />
  );
}; // ^ END Content
export default Content;
