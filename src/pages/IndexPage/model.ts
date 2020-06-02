import Cookies from 'js-cookie';
import { message } from 'antd';
import { sendGet } from '@/api/axios';

const indexPageModel = {
  namespace: 'indexPage',
  state: {
    count: 0,
  },
  reducers: {
    increaseCount(state: any, action: any) {
      state.count = state.count + 1;
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
        // yield put({ type: 'indexPage/increaseCount' });
        // put as dispatch
        //
        // DEMO-fail: takeLastest, other solution: lodash debounce
        // console.log('From debounce');
      } catch (e) {
        message.error('Cannot connect to server!');
        console.log(e.message);
      }
    },

    logout(action: any) {
      Cookies.remove('token');
      action.history.push('/login');
    },
  },
};
export default indexPageModel;
