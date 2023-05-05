import { createStore } from "redux";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  console.log("reducer running", action);
  if (action.type === "increment") {
    console.log("happening");
    return {
      counter: ++state.counter,
      showCounter: true,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: --state.counter,
      showCounter: true,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: true,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,  
    };
  } else {
    return state;
  }
};

const store = createStore(counterReducer);
// export const counterIncrementAction = ()

export default store;
