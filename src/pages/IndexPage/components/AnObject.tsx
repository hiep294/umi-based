import React, { useState, useEffect } from 'react';
import { selectItemDetail } from '../redux/selectors';
import { useDispatch } from 'umi';

const AnObject = () => {
  const [countInObjectComponent, setCountInObjectComponent] = useState(0);
  const item = selectItemDetail();

  // test push newItem to arr
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch({ type: 'indexPage/pushNewObject' })}>
        + push new object, expect re filter arr => ok
      </button>
    </>
  );
};

export default AnObject;
