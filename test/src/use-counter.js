import { useSelector } from "react-redux"
import { useActions } from "./use-actions"
import {increment,decrement,reset} from "./Action"

export const useCounter =()=>{
    const count =useSelector((state)=>state.count)
    const actions =useActions({increment,decrement,reset})
    return  {count,...actions}
}