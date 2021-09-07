import './App.css';
import { connect, useSelector } from 'react-redux';
import { actionplusone } from './Actions/actions';


function App({plusone}) {
  const count=useSelector(state=>state.count)
  return (
    <div className="App">
      <h1>count is {count}</h1>
      <button onClick={plusone}>click</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    plusone: () => dispatch(actionplusone())
  }
}

export default connect(null, mapDispatchToProps)(App);
