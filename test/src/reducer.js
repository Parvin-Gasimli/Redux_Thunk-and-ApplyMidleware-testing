

export const DECREMENT="DECREMENT"
export const INCREMENT="INCREMENT"
export const SET="SET"
export const initialState={count:1200}


export const reducer =(state=initialState,action)=>{
    if(action.type===INCREMENT){
        return{count:state.count+1}
    }

    if(action.type===DECREMENT){
        return {count:state.count-1}
    }
    if(action.type===SET){
        return {count:parseInt(action.payload,0)}

    }
    return state
}
