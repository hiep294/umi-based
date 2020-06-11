import React, { useState } from 'react';
import { useSelector, useDispatch } from 'umi';
import _ from 'lodash';
import CustomSkeleton from './components/CustomSkeleton';
import CustomTable from './components/CustomTable';
import { Input } from 'antd';
import { useDebounce } from '@umijs/hooks';
import UseDebounceDemo from './components/UseDebounceDemo';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import AnObject from './components/AnObject';

export default () => {
  return (
    <div>
      <CountOne />
      <CountTwo />
      <AnObject />
      <UseDebounceDemo />
    </div>
  );
};
