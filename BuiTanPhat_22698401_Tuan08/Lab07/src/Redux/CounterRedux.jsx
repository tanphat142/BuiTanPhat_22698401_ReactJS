import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/actions/CounterRedux";

const CounterRedux = () => {
  const counter = useSelector(state => state.CounterRedux);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Count: {counter}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;