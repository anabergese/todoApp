/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useRef, useEffect } from "react";
import { FunctionComponent } from "react";
import { Content } from "../App/Global";

const Assistant: FunctionComponent = () => {
  const containerRef = useRef(null);
  const url =
    "https://storage.googleapis.com/landbot.pro/v3/H-1506463-VCYG6GJ3NNWS56WV/index.json";

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const _landbot = new Landbot.Container({
      container: containerRef.current,
      configUrl: url,
    });

    return () => _landbot.destroy();
  }, [url, containerRef]);

  return (
    <Content>
      <h1 data-testid="h1home">Your Personal Assistant</h1>
      <div className="MyLandbot" ref={containerRef} />
    </Content>
  );
};

export default Assistant;
