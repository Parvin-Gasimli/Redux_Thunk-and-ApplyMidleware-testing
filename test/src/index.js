import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Dispatch } from 'react'
import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
// // const makeLouder =string=>string.toUpperCase()
// // const repeatThreetimes=string=>string.repeat(4)
// // const embolden=string=>string.bold()
// // console.log(makeLouder)
// // console.log(embolden)
// // console.log(repeatThreetimes)
// //  const makeLouderRepeatThreeTimesAndEmboled=compose(embolden,repeatThreetimes,makeLouder)
// //  console.log(makeLouderRepeatThreeTimesAndEmboled("hello"));

// // const initialState = { value: 0 }
// // const INCREMENET = 'INCREMENT'
// // const ADD = 'ADD '
// // const incrementAction = { type: INCREMENET, payload: 5, error: '' }
// // const increment = (amount) => ({ type: INCREMENET, payload: amount })
// // const add = (amount) => ({ type: ADD, payload: amount })

// // console.log(incrementAction)
// // const reducer = (state = initialState, action) => {
// //   if (action.type === INCREMENET) return { value: state.value + 1 }

// //   if (action.type === ADD) return { value: state.value + action.payload }

// //   return state
// // }

// // const store = createStore(reducer)
// // const subscriber = () => console.log('SUBSCRIBER', store.getState())

// // const actions =bindActionCreators({increment,add},store.dispatch)
// // console.log(actions);
// // actions.add(1000)
// // actions.increment()
// // store.dispatch(increment())
// // store.dispatch(increment())
// // store.dispatch(add(1000))
// // store.dispatch(add(1000))

// // console.log(store.getState())

// ////test2=====
// // const InitialState = {
// //   users: [
// //     { id: 1, name: 'Parvin' },
// //     { id: 2, name: 'Matin' },
// //     { id: 3, name: 'Maftun' },
// //   ],
// //   tasks: [{ title: 'file Upload' }, { title: 'file Downloader ' }],
// // }

// // const ADD_USER = "ADD_USER";
// // const ADD_TASK = "ADD_TASK";
// // const addTask = (title) => ({ type: ADD_TASK, payload: title })
// // const addUser = (name) => ({ type: ADD_USER, payload: name })

// // const userReducer = (users = InitialState.users, action) => {

// //   if (action.type === ADD_USER) {
// //     return [...users, action.payload]
// //   }
// //   return users
// // }
// // const taskReducer =(task=InitialState.tasks,action)=>{
// //   if(action.type===ADD_TASK){
// //     return [...task,action.payload]
// //   }
// //   return task
// // }

// // const reducer =combineReducers({users:userReducer,task:taskReducer})

// // const store =createStore(reducer)
// // console.log(store.getState());
// //=============================
// const reducers = (state={count:1}) => state

// const monitorEnhancer = (createStore) => (
//   reducers,
//   initialState,
//   enehencer,
// ) => {
//   const monitoredReducer = (state, action) => {
//     const start = performance.now()
//     const newState = reducers(state, action)

//     const end = performance.now()
//     const diff = end - start
//     console.log(diff)
//     return newState
//   }

//   return createStore(monitoredReducer, initialState, enehencer)
// }

// const logEnhancer=(createStore)=>(reducers,initialState,enehencer)=>{
//   const logReducer=(state,action)=>{
 
//     const reducer=(state,action)
//     console.log("old State",state,action);
//     const newState=reducer(state,action)
//     console.log("New State",newState,action);
//     return newState;
//   }
//   return createStore(logReducer,initialState,enehencer)
// }
// const logMiddleware= store=>next=>action=>{
//   console.log("old State",store.getState(),action);
//   next(action)
//   console.log('New satte',store.getState(),action);

// }
// const monitorMiddleware=(store)=>(next)=>(action)=>{
//   const start=performance.now()
//   next(action)

//   const end =performance.now()
//   const diff =end-start
//   console.log(diff);

// }


// const store =createStore(reducers,applyMiddleware(logMiddleware,monitorMiddleware))


// // const store = createStore(reducers)

// store.dispatch({ type: 'hello' })
