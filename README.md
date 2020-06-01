# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
* Note:
can use useSelector, useDispatch and still adapt performance:
https://react-redux.js.org/api/hooks

* note tasks:
+ write next plan of list, item => ok
+ apply immer => ok, config the following in .umirc.ts:  https://umijs.org/plugins/plugin-dva#%E9%85%8D%E7%BD%AE, it does not fire up re-rendering components in many times. (still can use return state normally)
update naming => ok
+ test useSelector => ok to use free style
+ test lessJS to use ID => not using, so continue to use given design
+ pagination: usually, it can be 100 records=> will be ok, does not need to view so many, does not need go to next records. found out a way to go up when click pagination. => ok
+ dynamic Sider => ok
+ review lodash

* finally: 
+useSelector, useDispatch instead of connect
+useParams, useHistory
+use action creators, and remove error message 'prefixNamespace'
+review redux-saga: take, put, select, takeLast (use debounce: https://medium.com/@anuhosad/debouncing-events-with-react-b8c405c33273)

## UMIJS based, based on Quan.Hoang

## For started: remove src/models/indexPageModel.ts, src/pages/IndexPage, clear README.md