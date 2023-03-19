import React, { useRef, useEffect, FunctionComponent } from "react";
import { StyledLandBot } from "./Assistant.styled";

const Assistant: FunctionComponent<{ url: string }> = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
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