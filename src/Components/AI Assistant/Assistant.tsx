import React, { useRef, useEffect, FunctionComponent } from "react";
import { StyledLandBot } from "./Assistant.styled";

interface LandbotContainer {
  new (options: { container: HTMLElement; configUrl: string }): any;
}

declare global {
  interface Window {
    Landbot: {
      Container: LandbotContainer;
    };
  }
}

interface LandbotContainerWithDestroy extends LandbotContainer {
  destroy: () => void;
}

const Assistant: FunctionComponent<{ url: string }> = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const globalWindow: Window & typeof globalThis = window;
    const Landbot = globalWindow.Landbot;
    const _landbot: LandbotContainerWithDestroy = new Landbot.Container({
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
