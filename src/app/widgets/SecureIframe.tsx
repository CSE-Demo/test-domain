import React from 'react';

const SecureIframe: React.FC<{ src: string, width?: string, height?: string }> = ({ src, width = '600', height = '400' }) => {
  return (
    <iframe 
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  );
};

export default SecureIframe;
