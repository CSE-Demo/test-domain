// App.tsx
import React from 'react';
import Widget from '../embeedableWidget/page';
import EmbedCode from '../embedWidget/page';
import SecureIframe from '../SecureIframe';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* <EmbedCode />
      <hr /> */}
      {/* <h2>Widget Preview</h2>
      <Widget /> */}
      <h2>Embeded iframe</h2>
      <iframe src="http://localhost:3000/widgets/embeedableWidget" width="600" height="400" />
      <br />
      <hr />
      <h2>Admin Widget</h2>
      <iframe src="https://cse-admin-e2e.app.intuit.com/cse-admin-ui/transactions" width="900" height="400" />
      <br />
      <hr />
      <h2>Financing Domain Widget</h2>
      <SecureIframe src="https://financing-e2e.app.intuit.com/business-financing/validation/7fe5fc65-c5bc-4895-892e-5a1edcb839a8" width="900" height="400" />
    </div>
  );
};

export default App;
