import React, { useCallback, useEffect, useState } from "react";

function MobileCheck() {
  const [isMobile, setIsMobile] = useState(false);

  const resizeWidth = useCallback(() => {
    if (window.innerWidth > 450) setIsMobile(false);
    else setIsMobile(true);
  }, []);

  useEffect(() => {
    resizeWidth();
  }, [resizeWidth]);

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, [resizeWidth]);

  return isMobile;
}

export default MobileCheck;
