import './App.css';
import Batsman from './Batsman';
import Counter from './counter';
import Users from './users';

function App() {

  function handleClick() {
    alert('Hello Niyamul.');
  }

  const handleClick3 = () => {
    alert('Hello dosto');
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Users></Users>
      <Counter></Counter>
      <Batsman></Batsman>
    

      {/* Example buttons */}
      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('Hello Mamma');
      }}>
        Click Me
      </button>

      <button onClick={handleClick3}>Click Me</button>

      <button onClick={() => alert('Kire ki khobor')}>
        Click Me
      </button>

      {/* Uncomment to test */}
      {/* <button onClick={() => handleAdd5(7)}>Click Add 5</button> */}
    </>
  );
}

export default App;
