import React from "react";

interface Props {
  canvasRef?: React.MutableRefObject<HTMLCanvasElement | undefined>;
  width?: number;
}

export const Canvas: React.FC<Props> = ({ canvasRef, width }) => {
  const widthHalf = width ? width / 2 : 0;
  const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" opacity="0.3" height="${width}" viewBox="0 0 ${width} ${width}" width="${width}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23000000" /></svg>') ${widthHalf} ${widthHalf}, auto`;

  return (
    <section>
      <canvas style={{ cursor, borderBottom: "1px solid gainsboro" }} ref={canvasRef as any} />
    </section>
  );
};
