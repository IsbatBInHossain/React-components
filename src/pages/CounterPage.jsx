import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
import produce from "immer";

const CHANGE_VALUE = "change-value";
const CHANGE_COUNT = "change-count";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      state.counter = state.counter + action.payload;
      return;

    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return;

    default:
      return;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    counter: initialCount,
    valueToAdd: 0,
  });
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
