import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isNumberAllowed, setNumber] = useState(false);
  const [isCharAllowed, setCharacters] = useState(false);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';
    let letters = alphabets

    if (isNumberAllowed) {
      letters += numbers;
    }
    if (isCharAllowed) {
      letters += specialChars;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      password += letters[randomIndex];
    }
    setPassword(password);
  }, [isNumberAllowed, isCharAllowed, length]);

  const copyText = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumberAllowed, isCharAllowed, passwordGenerator])

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center bg-gray-400 p-4 rounded-lg shadow-lg max-w-xs w-full">
        <label htmlFor="textInput" className="text-black font-semibold text-sm mb-3 underline">Random Password Generator 🔒</label>
        <input
          id="text"
          type="text"
          placeholder="random password..."
          readOnly
          value={password}
          ref={passwordRef}
          className="px-2 py-1 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button onClick={copyText} className='outline-none bg-blue-600 px-3 py-0.5 shrink-0 mb-2'>Copy</button>
        <div className="flex items-center justify-between w-full mb-4">
          <input
            type="range"
            min={1}
            max={99}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="flex-grow px-2 mr-1 cursor-pointer"
          />
          <label htmlFor="range" className="text-sm">Length ({length})</label>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              id="checkbox1"
              type="checkbox"
              defaultChecked={isNumberAllowed}
              onChange={() => { setNumber((prev) => !prev) }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="checkbox1" className="ml-2 text-sm text-black">Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox2"
              type="checkbox"
              defaultChecked={isCharAllowed}
              onChange={() => { setCharacters((prev) => !prev) }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="checkbox2" className="ml-2 text-sm text-black">Characters</label>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
