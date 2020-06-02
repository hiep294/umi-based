import React, { useState } from 'react';
import { useSelector, useDispatch } from 'umi';
import _ from 'lodash';

export default () => {
  // // const [c, setc] = useState(initialState)
  const count = useSelector((state: any) => state.indexPage.count);
  const dispatch = useDispatch();

  return (
    <div>
      {count}
      <button
        onClick={_.debounce(() => {
          dispatch({ type: 'indexPage/increaseCountEffect' });
        }, 0)}
      >
        +
      </button>
    </div>
  );
};
