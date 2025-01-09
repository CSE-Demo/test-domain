'use client'

import React, { useState } from 'react';

const EmbedCode: React.FC = () => {
  const iframeCode = `
<iframe src="http://localhost:3000/widgets/embeedableWidget" width="600" height="400" frameborder="0" allowfullscreen></iframe>
  `.trim();

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iframeCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div>
      <h1>Embed My Widget</h1>
      <p>To embed this widget on your website, copy and paste the code below:</p>
      <textarea
        rows={4}
        cols={50}
        readOnly
        value={iframeCode}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={copyToClipboard}>
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default EmbedCode;
