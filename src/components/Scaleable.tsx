"use client"

import React, { useState, useEffect } from "react";
import Desktop_home from "./desktop/desktop_home"
import GetInTouch from "./getintouch/page";
import Maintainable from "./maintainable/page";
import WhatWeDo from "./whatwedo/page";
import Mobile_home from "./mobile/mobile_home"
import GetInTouch_Mobile from "./getintouch/mobile/page";
import Maintainable_Mobile from "./maintainable/mobile/page";
import WhatWeDo_Mobile from "./whatwedo/mobile/page";
import { Components } from "@/lib/data_interface";
import { usePathname } from "next/navigation";

interface ContentProps {
  data: Components;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  const pathname = usePathname()
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

  if (dimensions > breakpoint) {
    return (
      <>
        {pathname === "/" && <Desktop_home data={data} />}
        {pathname === "/getintouch" && <GetInTouch data={data} />}
        {pathname === "/maintainable" && <Maintainable data={data} />}
        {pathname === "/whatwedo" && <WhatWeDo data={data} />}
        
      </>
    );
  } else {
    return (
      <>
        {pathname === "/" && <Mobile_home data={data} />}
        {pathname === "/getintouch" && <GetInTouch_Mobile data={data} />}
        {pathname === "/maintainable" && <Maintainable_Mobile data={data} />}
        {pathname === "/whatwedo" && <WhatWeDo_Mobile data={data} />}
        
      </>
    );
  }
}; // ^ END Content
export default Content;