import React, { useState } from 'react';
import { selectCount } from '../redux/selectors';
import { useDispatch } from 'umi';

const CountOne = () => {
  const count = selectCount();
  const dispatch = useDispatch();
  const [countInCount, setCountInCount] = useState(0);

  return (
    <>
      <div>count one: {count}</div>
      <button
        onClick={() => {
          dispatch({ type: 'indexPage/increaseCountEffect' });
        }}
      >
        +
      </button>
      <div>CountinCount: {countInCount}</div>
      <button
        onClick={() => {
          setCountInCount(countInCount + 1);
        }}
      >
        + countInCOunt
      </button>
    </>
  );
};

export default CountOne;
