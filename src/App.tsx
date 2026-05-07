import './App.css';

function App() {
  return (
    <div>
      <h2 className='text-3xl font-bold underline text-red-500'>Hello World</h2>
      <div id="result"></div>
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => {
        fetch('http://localhost:3000')
          .then((res) => res.json())
          .then((data) => {
            document.getElementById('result')!.innerHTML = JSON.stringify(data, null, 2);
          })
          .catch((err) => console.log(err));
      }}
      >
        Click me
      </button>
    </div>
  );
}

export default App
