import React from "react";

interface BackgroundProps {
  opacity: string;
}

const Background: React.FC<BackgroundProps> = ({ opacity }) => {
  return <div className="fixed inset-0 bg-black" style={{opacity: Number(opacity) * 0.01}}/>;
};

export default Background;
