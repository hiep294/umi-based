import React, { useState } from 'react';
import { Input } from 'antd';
import { useDebounce } from '@umijs/hooks';

const UseDebounceDemo = () => {
  const [text, setText] = useState('');
  const debounceValue = useDebounce(text, 400);

  return (
    <div>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <div>Debounce value: {debounceValue}</div>
      {/* <CustomTable /> */}
    </div>
  );
};

export default UseDebounceDemo;
