import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, reset } from "./Action";
import { SetCounter } from "./SetCounter";
import { useActions } from "./use-actions";
import { useCounter } from "./use-counter";
export const Counter =()=>{
    const incident='Incident'
const {count,increment,decrement,reset}=useCounter()
    return (
        <main>
            <h1>Days Since Last {incident}</h1>
            <p className="count">{count} </p>
            <section className="controls">
                <button onClick={()=>increment()}>increment</button>
                <button onClick={()=>reset(0)}>Reset</button>
                <button onClick={()=>decrement()}>Decirement</button>
                <SetCounter/>

            </section>
        </main>
    )
}
export default Counter;