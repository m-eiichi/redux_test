import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "@/ducks/counter/slises";
import {RootState} from "@/ducks/store";
import { ToggleSwitch } from "@/component/toggle_switch";
import Styles from "./counter.module.css"

export const Counter = () => {
  const counter = useSelector((state:RootState) => state.counter.counter);
  const show = useSelector((state:RootState) => state.counter.showNum);
  const login = useSelector((state:RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className={Styles.container}>
      {show && <h1>{counter}</h1>}
      <div className="counter-btn">
        <button className="btn" onClick={incrementHandler}>
          +1
        </button>
        <button className="btn" onClick={increaseHandler}>
          +5
        </button>
        <button className="btn" onClick={decrementHandler}>
          -1
        </button>
      </div>

      <div className={Styles.toggle_switch_container}>
        <p>表示/非表示</p><ToggleSwitch size="m" disabled={!login} checked={show} onClick={toggleHandler}/>
      </div>
    </div>
  );
};
