import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import useLoadTime from '..';

const App = () => {
  const [state, setState] = useState('');
  const [loadTime] = useLoadTime();

  return (
    <div>
      <div>load time: {loadTime}</div>
      <div>state: {state}</div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
