import React, { useEffect } from 'react';
import { options } from '../Options/Options';
class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const openaiAPIKey = config.openaiAPIKey;
    return (
      <div>
        <h1>Extension Options</h1>
        <p>OpenAI API Key: {openaiAPIKey}</p>

      </div>
    );
  }
}

export default OptionsComponent;
