import React, { useState, useEffect } from 'react';
import { selectItemDetail } from '../redux/selectors';

const AnObject = () => {
  const [countInObjectComponent, setCountInObjectComponent] = useState(0);
  const item = selectItemDetail();

  useEffect(() => {
    // check when change countInObjectComponent, whether or not item will be new
    console.log('checking');
  }, [item]);

  return (
    <>
      <div>{JSON.stringify(item)}</div>
      <div>Count In Object Component: {countInObjectComponent}</div>
      <button
        onClick={() => setCountInObjectComponent(countInObjectComponent + 1)}
      >
        + count in object
      </button>
    </>
  );
};

export default AnObject;
