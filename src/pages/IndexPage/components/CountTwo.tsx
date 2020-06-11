import React from 'react';
import { selectCountTwo } from '../redux/selectors';
import { useDispatch } from 'umi';

const CountTwo = () => {
  const count = selectCountTwo();
  const dispatch = useDispatch();
  return (
    <>
      <div>count two:{count}</div>
      <button
        onClick={() => {
          dispatch({ type: 'indexPage/increaseCountTwo' });
        }}
      >
        +
      </button>
    </>
  );
};

export default CountTwo;
