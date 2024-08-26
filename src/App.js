import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 5 } });
    dispatch({ type: 'PLUS' });
  };

  const decrease = () => {
    dispatch({ type: 'DECREASE', payload: { num: 5 } });
    dispatch({ type: 'MINUS' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={increase}>+5</button>
      <button onClick={decrease}>-5</button>
      <button onClick={reset}>reset</button>
      <Box />
    </div>
  );
}

export default App;
