import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "./Canvas";
import { Toolbar } from "./Toolbar";
import { usePainter } from "../../hooks/usePainter";

const Paint = () => {
  const [dateUrl, setDataUrl] = useState("#");
  const [{ canvas, isReady, ...state }, { init, ...api }] = usePainter();

  const handleDownload = useCallback(() => {
    if (!canvas || !canvas.current) return;

    setDataUrl(canvas.current.toDataURL("image/png"));
  }, [canvas]);

  const toolbarProps = { ...state, ...api, dateUrl, handleDownload };

  useEffect(() => {
      init()
      // eslint-disable-next-line
  }, []);

  return (
    <>
      <Toolbar {...toolbarProps} />
      <Canvas width={state.currentWidth} canvasRef={canvas} />
    </>
  );
};

export default Paint;
