import './App.css';
import Batsman from './Batsman';
import Users from './users';
import Counter from './counter';
import Friends from './friends';
import Posts from './posts';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function App() {
  const postsPromise = fetchPosts();

  function handleClick() {
    alert('Hello Niyamul.');
  }

  const handleClick3 = () => {
    alert('Hello dosto');
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      {/* Posts Section */}
      <Posts postsPromise={postsPromise} />

      {/* Other Components */}
      <Counter />
      <Batsman />

      {/* Example Buttons */}
      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert('Hello Mamma');
        }}
      >
        Click Me
      </button>

      <button onClick={handleClick3}>Click Me</button>

      <button onClick={() => alert('Kire ki khobor')}>Click Me</button>

      {/* Uncomment to test */}
      {/* <button onClick={() => handleAdd5(7)}>Click Add 5</button> */}
    </>
  );
}

export default App;
