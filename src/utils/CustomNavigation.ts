import { History } from 'umi';
import React from 'react';

interface ICustomNavigation {
  history: History<History.PoorMansUnknown> | null;
  setTopLevelHistory: Function;
}
const CustomNavigation: ICustomNavigation = {
  history: null,
  setTopLevelHistory: (history: any) => {
    CustomNavigation.history = history;
  },
};

export default CustomNavigation;
