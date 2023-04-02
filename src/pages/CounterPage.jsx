import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const CHANGE_VALUE = "change-value";
const CHANGE_COUNT = "change-count";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_COUNT,
      payload: state.valueToAdd,
    });
    dispatch({
      type: CHANGE_VALUE,
      payload: 0,
    });
  };

  const increment = () => {
    dispatch({
      type: CHANGE_COUNT,
      payload: 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: CHANGE_COUNT,
      payload: -1,
    });
  };

  return (
    <Panel className="flex flex-col justify-center ">
      <h3 className=" mb-5">Count: {state.counter}</h3>
      <div className="flex mb-3">
        <Button danger className="w-28 mr-5" onClick={decrement}>
          Decrement
        </Button>
        <Button success className="w-28" onClick={increment}>
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="mt-4 mb-4 border-2 border-black"
        />
        <Button primary>Add a lot</Button>
      </form>
    </Panel>
  );
};
export default CounterPage;
