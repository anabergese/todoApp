/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useRef, useEffect, FunctionComponent } from "react";
import { StyledLandBot } from "./Assistant.styled";

const Assistant: FunctionComponent<{ url: string }> = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const Landbot = (window as any).Landbot; //@ts-ignore
    const _landbot = new Landbot.Container({
      container: containerRef.current,
      configUrl: url,
    });

    return () => _landbot.destroy();
  }, [url, containerRef]);

  return (
    <StyledLandBot>
      <div className="App_Assistant" ref={containerRef} />
    </StyledLandBot>
  );
};

export default Assistant;
