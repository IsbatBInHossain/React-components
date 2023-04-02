import Button from "../components/Button";
import useCounter from "../hooks/useCounter";
const CounterPage = ({ initialCount }) => {
  const [counter, increment] = useCounter({ initialCount });
  return (
    <div className="flex flex-col justify-center">
      <h3 className=" mb-5">Count: {counter}</h3>
      <Button secondary className="w-28" onClick={increment}>
        Increment
      </Button>
    </div>
  );
};
export default CounterPage;
