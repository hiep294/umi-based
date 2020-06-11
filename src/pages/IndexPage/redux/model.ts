import Cookies from 'js-cookie';
import { message } from 'antd';
import { sendGet } from '@/api/axios';
import _ from 'lodash';

const indexPageModel = {
  namespace: 'indexPage',
  state: {
    count: 0,
    countTwo: 1,
    items: [
      {
        id: 'a',
        value: 'hi',
      },
      {
        id: 'b',
        value: 'ho',
      },
    ],
    itemDetailId: 'b',
  },
  reducers: {
    increaseCount(state: any, action: any) {
      state.count = state.count + 1;
    },
    increaseCountTwo(state: any, action: any) {
      state.countTwo = state.countTwo + 1;
    },
    pushNewObject(state: any, action: any) {
      state.items.push({
        id: Date.now(),
        value: Date.now(),
      });
    },
  },
  effects: {
    *increaseCountEffect(
      action: any,
      { call, select, put, all, ...others }: any,
    ) {
      try {
        // DEMO: select
        // const count = yield select((state: any) => state.indexPage.count);
        //
        // DEMO: call; send request
        // const result = yield call(sendGet, '/api/users');
        // console.log('ss', result); //=> {config, data, headers, request, status, statusText}
        //
        // DEMO: all: send many requests
        // const results = yield all([
        //   call(sendGet, '/api/users'),
        //   call(sendGet, '/api/users/1'),
        // ]);
        // console.log(results); => [result1, result2]
        //
        // DEMO: put as dispatch
        yield put({ type: 'indexPage/increaseCount' });
        // put as dispatch
        //
        // DEMO-fail: takeLastest, other solution: lodash debounce
        // console.log('From debounce');
      } catch (e) {
        message.error('Cannot connect to server!');
        console.log(e.message);
      }
    },
    increaseTakeLastestAndDelay: [
      function*(action: any, { effects }: any) {
        // console.log(others);
        setTimeout(() => {
          console.log('running');
        }, 1000);
      },
      { type: 'takeLatest' },
    ],
    logout(action: any) {
      Cookies.remove('token');
      action.history.push('/login');
    },
  },
};
export default indexPageModel;
