import './App.css';

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-fit bg-gray-400 p-2 rounded-lg shadow-lg">
        <label htmlFor="textInput" className="text-black font-semibold mb-4 underline">Random Password Generator 🔒</label>
        <input
          id="textInput"
          type="text"
          placeholder="random password..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="flex items-center mt-5">
          <input type='range' className='px-4 px-2 mr-1' />
          <label htmlFor='range' className='px-4 px-2 mr-4'>Length(6)</label>
          <input
            id="checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label htmlFor="checkbox" className="ml-2 text-black mr-4">Numbers</label>

          <input
            id="checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox" className="ml-2 text-black">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
